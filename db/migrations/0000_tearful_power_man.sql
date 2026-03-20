CREATE TABLE `custom_commands` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`aliases` text DEFAULT '[]' NOT NULL,
	`arguments` text DEFAULT '[]' NOT NULL,
	`permission` text DEFAULT 'everyone' NOT NULL,
	`code` text NOT NULL,
	`is_enabled` integer DEFAULT true NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `custom_commands_name_unique` ON `custom_commands` (`name`);--> statement-breakpoint
CREATE TABLE `linked_accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`twitch_id` text,
	`kick_id` text,
	`discord_id` text,
	`youtube_id` text,
	`linked_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `linked_accounts_twitch_id_unique` ON `linked_accounts` (`twitch_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `linked_accounts_kick_id_unique` ON `linked_accounts` (`kick_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `linked_accounts_discord_id_unique` ON `linked_accounts` (`discord_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `linked_accounts_youtube_id_unique` ON `linked_accounts` (`youtube_id`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`money` integer DEFAULT 0 NOT NULL,
	`nickname` text,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
