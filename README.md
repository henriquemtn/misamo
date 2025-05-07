# Misamo

**Beautiful UI components built with Tailwind CSS and React.**

Misamo is an extensive collection of copy-and-paste components for quickly building app UIs. It includes hundreds of components and is constantly updated with new designs.

**Demo** → [https://misamo.io](https://misamo.io)

## Getting Started

Misamo is designed to integrate seamlessly with Next.js projects, but the components are also compatible with any React-based project. The components follow shadcn conventions, so they'll feel familiar to anyone who has used shadcn before.

**1. Set up the required files:**

- Copy all `.tsx` files from Misamo's `registry/default/ui` folder to your project's `components/ui` folder.
- Copy `utils.ts` from Misamo's `registry/default/lib` folder to your project's `lib` folder.

Note: If you're using shadcn, you may likely already have these files - however, I would recommend using our components over shadcn's for a consistent styling experience.

After completing these steps, you can copy and use the components in your project. Note that some components (e.g., number inputs, date pickers, time pickers, phone number inputs) may require additional libraries.

# Creating Components

This guide walks you through the process of creating and registering new components.

## Quick Steps

1. Go to registry/default/components and create your component
2. Go to registry.json and add a schema of your component
3. Go to config/components.ts and add your component inside of one category
4. After all, run the "npm run registry:build" to build your changes inside public/r folder