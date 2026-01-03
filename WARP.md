# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
A React + TypeScript + Vite web application for building professional resumes. Users input their profile information, education, work history, certificates, and awards through a multi-step form interface. The data is stored in localStorage and can be exported to DOCX format using the `docx` library.

## Commands

### Development
```bash
npm run dev        # Start development server with Vite
npm run preview    # Preview production build locally
```

### Build
```bash
npm run build      # TypeScript compilation + Vite production build
```

### Linting
```bash
npm run lint       # Run ESLint with TypeScript support
```

Note: There is no test suite currently configured in this project.

## Architecture

### Data Flow Architecture
This application uses a **localStorage-based state management** pattern:
1. Each form component (GeneralInformation, Education, WorkHistory, etc.) maintains local React state
2. When user clicks "Next", component serializes data to localStorage under a specific key
3. Keys used: `userProfile`, `education`, `jobs`, etc.
4. Resume generation reads all data from localStorage and transforms it into DOCX format

### Type System
The codebase has a **dual type definition pattern**:
- **`src/interface/`**: TypeScript interfaces defining the data contracts (UserProfile, Education, WorkHistory, Certificate, Award, resumeData)
- **`src/resume-templates/template-1.ts`**: Contains duplicate class definitions used for testing/mocking

When working with resume data structures, prefer the interfaces in `src/interface/` over the classes in template files.

### Component Organization
- **`src/components/`**: Form components for data collection
  - Each major section (Education, WorkHistory, etc.) is a separate component
  - Components use controlled inputs with local state
  - `src/components/index.ts` serves as the barrel export file
- **`src/components/landingPage/`**: Landing page component (currently minimal)
- **`src/components/generalInfo/`**: User profile information form
- **`src/resume-templates/`**: DOCX generation logic using the `docx` library
  - Template functions transform data from localStorage into Word document format
  - Currently contains hardcoded test data alongside generation logic

### Utilities
- **`src/utilities/common.ts`**: Helper functions including:
  - `formatDateToMonthYear()`: Formats Date objects to YYYY-MM format
  - `verifyObjectInLocalStorage()`: Debug utility for inspecting localStorage data
- **`src/utilities/degreeTypes.ts`**: Enum/constants for education degree types

## Styling
This project uses **Tailwind CSS** for styling:
- Configuration: `tailwind.config.js`
- PostCSS: `postcss.config.cjs`
- Main styles: `src/index.css`
- Component-specific CSS files exist in component subdirectories

## TypeScript Configuration
- **Strict mode enabled** with most type checking rules active
- Exception: `noImplicitAny: false` allows implicit any types
- Target: ES2020
- JSX: react-jsx (new JSX transform)
- Module resolution: bundler mode

## Known Issues & TODOs
Based on code comments:
- Template-1 needs refactoring to use actual data instead of hardcoded test data
- Functions for dynamically creating resume sections need to be implemented
- Education component has a FIXME: remove test verification function, add error boundary, add back button
- TODO.txt indicates plans to convert to Next.js and add API/access key functionality

## File Extensions
When creating new files, use `.ts` for utilities/types and `.tsx` for React components. All imports should include the `.ts` or `.tsx` extension (e.g., `import { UserProfile } from "./userProfile.ts"`).
