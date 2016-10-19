WCS Display
===========

Digital signage for the WCS Office television.

Setup
-----

```bash
yarn
cd src
cp secrets.js.sample secrets.js
```

Populate `secrets.js` with your API keys.

How to run
----------

Download a prebuilt binary of [Electron](https://github.com/atom/electron/releases). Then run:

```bash
npm run build
electron . # Install Electron through npm / yarn
```

When doing development, you can use the ```gulp watch``` feature to get livereloading in the browser before deploying.

Raspberry Pi setup guide
------------------------

See the [wiki](https://github.com/acm-uiuc/display/wiki/Raspberry-Pi-2-3-Setup-Guide) for instructions for setting up a production display on a Raspberry Pi.
