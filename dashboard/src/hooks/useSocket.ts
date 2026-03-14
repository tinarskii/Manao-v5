import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";

let sharedSocket: Socket | null = null;
let socketPromise: Promise<Socket> | null = null;

async function getSocket(): Promise<Socket> {
  if (sharedSocket) return sharedSocket;
  if (socketPromise) return socketPromise;

  socketPromise = (async () => {
    const res = await fetch("/api/socket");
    const { url } = await res.json();
    sharedSocket = io(url, { transports: ["websocket"] });
    return sharedSocket;
  })();

  return socketPromise;
}

export function useSocket() {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    let cancelled = false;
    getSocket().then((s) => {
      if (cancelled) return;
      setSocket(s);

      const onConnect = () => setConnected(true);
      const onDisconnect = () => setConnected(false);

      s.on("connect", onConnect);
      s.on("disconnect", onDisconnect);
      setConnected(s.connected);

      return () => {
        s.off("connect", onConnect);
        s.off("disconnect", onDisconnect);
      };
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { socket, connected };
}

export function useSocketEvent<T>(event: string, handler: (data: T) => void) {
  const { socket } = useSocket();
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!socket) return;
    const stable = (data: T) => handlerRef.current(data);
    socket.on(event, stable);
    return () => {
      socket.off(event, stable);
    };
  }, [socket, event]);
}
