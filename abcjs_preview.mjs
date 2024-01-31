#!/usr/bin/env node
// This is a BBEdit text filter for transforming `abc` music notation into a
// block of `SVG` that renders standard music engraving so that BBEdit may
// display a preview. To use it you have to have `nodejs` present on your
// system, and you have to install Daniel Narey's `scoped` ES module
// `abc-render-svg` like this: `npm i @folkdb/abc-render-svg`. That module, in
// turn relies on Paul Rosen's `abcjs` module, and the `domjs` module. All that
// is present in `@folkdb/abc-render-svg`.

// This ES module will not support `require()` so the BBEdit script needs the
// file extension `.mjs` in order to import the module. That `.mjs` file needs
// to live at `~/Library/Appliation Support/BBEdit/Text Filters/`. Use it by
// selecting some ABC text, and invoking the Text Filter. The selected text will
// be replaced by an SVG element which BBEdit can preview as if it were in an
// HTML page.

import abcRenderSvg from '@folkdb/abc-render-svg'

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data", data => {
    (async () => {
        const svg = await abcRenderSvg(data);
        process.stdout.write(svg);
    })();
})

