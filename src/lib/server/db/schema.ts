
import {sqliteTable, integer, text, primaryKey} from 'drizzle-orm/sqlite-core';

const roles = [
    'CAPTAIN',
    'SPRINTER',
    'OTHER',
] as const;

export const riders = sqliteTable('riders', {
    name: text().primaryKey(),
    role: text({ enum: roles }).notNull(),
    youth: integer({ mode: 'boolean' }).notNull(),
});

export const teams = sqliteTable('teams', {
    teamName: text().primaryKey(),
    teamLeader: text().notNull(),
});

export const teamRiders = sqliteTable('teamRiders', {
    teamName: text().references(() => teams.teamName, { onDelete: 'cascade' }),
    rider: text().references(() => riders.name, { onDelete: 'cascade' }),
    priority: integer().notNull(),
}, (table) => [
    primaryKey({ columns: [table.teamName, table.rider]})
]);

export const stageResults = sqliteTable('stageResults', {
    stage: integer(),
    rider: text().references(() => riders.name, { onDelete: 'cascade' }),
    stagePlacing: integer(),
    gcPlacing: integer(),
    pointsPlacing: integer(),
    mountainPlacing: integer(),
    youthPlacing: integer(),
    combativite: integer({ mode: 'boolean' }).notNull(),
    onBestTeam: integer({ mode: 'boolean' }).notNull(),
}, (table) => [
    primaryKey({ columns: [table.stage, table.rider ]})
]);

export const abandoned = sqliteTable('abandoned', {
    rider: text().references(() => riders.name, { onDelete: 'cascade' }).primaryKey(),
    stage: integer().notNull(),
})


