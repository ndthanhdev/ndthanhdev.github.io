#!/usr/bin/env node

/**
 * Prepare the docs folder structure for the repo-docs skill.
 * Creates any missing directories under docs/ and ensures an
 * index file exists at skills/repo-docs/state/index.md.
 *
 * Usage:
 *   node skills/repo-docs/scripts/prepare.mjs
 *   bun  skills/repo-docs/scripts/prepare.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { existsSync } from "node:fs";

const SKILL_DIR = resolve(import.meta.dirname, "..");
const ROOT = resolve(SKILL_DIR, "../..");
const STATE_DIR = join(SKILL_DIR, "state");
const DOCS_DIR = join(ROOT, "docs");

const FOLDERS = [
  {
    name: "concepts",
    description: "Domain concepts, mental models, and terminology",
  },
  {
    name: "how-it-works",
    description: "Architecture, internals, data flow, and design decisions",
  },
  {
    name: "how-tos",
    description: "Step-by-step guides for common tasks",
  },
  {
    name: "conventions",
    description: "Coding standards, naming rules, and patterns to follow",
  },
];

async function ensureFolders() {
  for (const folder of FOLDERS) {
    const dir = join(DOCS_DIR, folder.name);
    if (existsSync(dir)) {
      console.log(`✓ ${folder.name}/ already exists`);
    } else {
      await mkdir(dir, { recursive: true });
      console.log(`✚ created ${folder.name}/`);
    }
  }
}

async function ensureIndex() {
  await mkdir(STATE_DIR, { recursive: true });
  const indexPath = join(STATE_DIR, "index.md");
  if (existsSync(indexPath)) {
    console.log(`✓ index.md already exists`);
    return;
  }
  await writeFile(indexPath, "# Repo Docs Index\n", "utf-8");
  console.log(`✚ wrote ${indexPath}`);
}

async function prepare() {
  await ensureFolders();
  await ensureIndex();
  console.log("\ndocs/ structure is ready.");
}

prepare().catch((error) => {
  console.error("Failed to prepare docs structure:", error);
  process.exit(1);
});
