# Photographs

No stock photography. Every file in this folder was cropped from the Lovisto
Tours company profile PDF. `src/data/images.ts` holds the alt text and usage for
each one, and `ImageSlot.astro` renders it as a responsive, optimised image.

Several profile photos are only 200–420 px wide, so they are used at thumbnail
size rather than blown up. If the client supplies the original camera files,
overwrite the matching file name here and Astro will re-optimise it at build
time — no layout changes needed.

If a file is removed, `ImageSlot.astro` shows a labelled placeholder instead of
a broken image.
