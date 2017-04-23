---

# proper-case

Proper cases personal names.

## Some benefits include:

1. fewer string transformations during datastore retrieval
2. proper casing up front rather than across multiple applications 
3. keeping user input consistent

## Features

- trims
- transforms
    *  o'brien => O'Brien
    *  jo-anne => Jo-Anne
    *  dePaola => DePaola
    *  ibn al-ahmed => Ibn Al-Ahmed

## Requirements

- assume user input completely disregards case 

## Installation

- `npm install proper-case`

---
