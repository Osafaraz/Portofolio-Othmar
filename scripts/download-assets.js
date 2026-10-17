import fs from 'fs';
import path from 'path';
import http from 'http';

const assets = [
  // Hero
  { url: 'http://localhost:3845/assets/f477a5c4423d9309cdd3ea462b69a99e1eca93c7.svg', dest: 'public/assets/images/hero-blob-blue.svg', layer: 'Ellipse 6 (Hero left blue gradient blob)', section: 'home' },
  { url: 'http://localhost:3845/assets/f9831515d5712b3465ce77ffba111d2d1ba697dc.svg', dest: 'public/assets/images/hero-blob-orange.svg', layer: 'Ellipse 7 (Hero right peach/orange gradient blob)', section: 'home' },
  { url: 'http://localhost:3845/assets/41f98af20d4aebcd1efdf9d5ce6bd0256783581b.svg', dest: 'public/assets/stickers/sticker-2026-base.svg', layer: 'Ellipse 1 (Sticker 2026 base)', section: 'home' },
  { url: 'http://localhost:3845/assets/c1a8e811d5a22ae1b0ef75941cba39361ca0068a.svg', dest: 'public/assets/stickers/sticker-2026-dash.svg', layer: 'Ellipse 2 (Sticker 2026 dashed inner oval)', section: 'home' },
  { url: 'http://localhost:3845/assets/ca6a6a52fca966381eb91b37da417c85df1f007d.svg', dest: 'public/assets/stickers/sticker-always-circle.svg', layer: 'Group 4 (Always With New Ideas sticker background)', section: 'home' },
  { url: 'http://localhost:3845/assets/da6009dc0d76dd5df67ed6248ecc52c8cb5a8ccf.svg', dest: 'public/assets/stickers/sticker-always-star.svg', layer: 'Star (Always With New Ideas sticker star decorative)', section: 'home' },
  { url: 'http://localhost:3845/assets/4d97bae93aba1c6fd315bacd2a69e3ca23886552.svg', dest: 'public/assets/stickers/sticker-smile-red-base.svg', layer: 'Ellipse 4 (Smiley sticker red circle shadow/base)', section: 'home' },
  { url: 'http://localhost:3845/assets/b3fe1bcf9c798427d0da2654580eecdf6b8af674.svg', dest: 'public/assets/stickers/sticker-smile-face.svg', layer: 'gg:smile / Group (Smiley face white outline)', section: 'home' },

  // About Me
  { url: 'http://localhost:3845/assets/556700fc98dea2bd839500640d1946f3698fd247.png', dest: 'public/assets/images/about-polaroid-photo.png', layer: 'WhatsApp Image (Othmar portrait polaroid photo)', section: 'about' },
  { url: 'http://localhost:3845/assets/0fb8f0c74540c0e2bf0e75f929b576cc892c6314.png', dest: 'public/assets/images/about-paper-clip.png', layer: 'bulldog paper clips (Metal binder clip on polaroid)', section: 'about' },
  { url: 'http://localhost:3845/assets/03648964dd283f5e59580dcb78749bcc51878174.svg', dest: 'public/assets/icons/dot-red.svg', layer: 'Ellipse 8 (Red bullet dot for Experience/Education)', section: 'about' },
  { url: 'http://localhost:3845/assets/c688044e8f70f23dfa20c39825e0cbf25a0f3f1c.svg', dest: 'public/assets/icons/icon-email.svg', layer: 'material-symbols:mail-outline (Red mail icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/adaa2a59672b52861a0dc1376f138943c3783b3a.svg', dest: 'public/assets/icons/icon-phone.svg', layer: 'mdi:phone (Red phone icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/e13887d62f635e6c984858ba3574e2e7fda4d001.svg', dest: 'public/assets/icons/icon-tiktok.svg', layer: 'ic:baseline-tiktok (Red TikTok icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/2d92b7ffc6a19e171dc8c2aaeccd2012d4b51864.svg', dest: 'public/assets/images/about-photo-mask.svg', layer: 'Mask group mask for polaroid photo', section: 'about' },
  { url: 'http://localhost:3845/assets/087b96b7b95706cc1b212ac669c55f4d2dcc784f.svg', dest: 'public/assets/stickers/sticker-smile-circle-about.svg', layer: 'Smile Sticker base in polaroid', section: 'about' },
  { url: 'http://localhost:3845/assets/20a239825c372a8dbb75911f60b9c5030e08c0f7.svg', dest: 'public/assets/stickers/sticker-orange-circle.svg', layer: 'Orange Sticker on polaroid', section: 'about' },
  { url: 'http://localhost:3845/assets/f28d3294a75d5b9193eb12bd045f571f579434ae.svg', dest: 'public/assets/icons/software-photoshop.svg', layer: 'logos:adobe-photoshop (Photoshop red rounded icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/ac9e16bb325eeba6c806efd935a7938bfaa33e7a.svg', dest: 'public/assets/icons/software-illustrator.svg', layer: 'logos:adobe-illustrator (Illustrator red rounded icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/db362596a9d82b8de00cecd37ed5b0a64336a441.svg', dest: 'public/assets/icons/software-capcut.svg', layer: 'Group (CapCut / Premiere red rounded icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/e065fb1b6b1b07ca0a8240015729dec0914de24e.svg', dest: 'public/assets/icons/software-blender.svg', layer: 'material-icon-theme:blender (Blender white glyph)', section: 'about' },
  { url: 'http://localhost:3845/assets/d10f528889dde4b5989f3b1cf3f469c51a92c5c2.svg', dest: 'public/assets/icons/software-clipstudio.svg', layer: 'arcticons:clip-studio (Clip Studio Paint red icon)', section: 'about' },
  { url: 'http://localhost:3845/assets/6f209b53ff3dc16cf4dda475bd0f675e30976839.svg', dest: 'public/assets/icons/software-figma.svg', layer: 'devicon:figma (Figma white glyph)', section: 'about' },
  { url: 'http://localhost:3845/assets/839d019b372fe9138d45785c9009c693369f37d7.svg', dest: 'public/assets/stickers/sticker-contact-me.svg', layer: 'Vector (Contact Me! red badge sticker)', section: 'about' },

  // PCR Cup Works
  { url: 'http://localhost:3845/assets/8b3575b938c967ad1e35efefa8061a8eb1a8183d.png', dest: 'public/assets/mockups/pcr-tshirt.png', layer: 'image_front 1 (Green PCR Cup t-shirt mockup)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/f62b3ccb54b8646d77c7a7cf7b02e3e2d0930635.png', dest: 'public/assets/mockups/pcr-cup-logo.png', layer: 'Logo PCR CUP 2 (LIGHT)-01 (Light green basketball logo)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/d5382d0add2f0df7d97e0b43750b40a6d3d97a40.png', dest: 'public/assets/mockups/pcr-story.png', layer: 'Instagram story - 2 (Basketball story mockup on phone)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/1a98e1a59854fae29d5f9e410d62d9e94866fb2c.png', dest: 'public/assets/mockups/pcr-poster-flyer.png', layer: 'poster basket 1 (Green tournament flyer pinned)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/d3e5c2504cdd2fe251957eb8767e2df372b7ebf2.png', dest: 'public/assets/images/red-pushpin.png', layer: 'Paper stationary red pins (Red pushpin on flyer)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png', dest: 'public/assets/stickers/emoji-3d-heart-eyes.png', layer: 'Rectangle (3D heart-eyes smiling emoji)', section: 'pcr-cup, 4c' },
  { url: 'http://localhost:3845/assets/e44ab13748b2c2dc47a6de834d99b5a24cf15ab2.png', dest: 'public/assets/mockups/pcr-fulltime-match1.png', layer: 'full time MATCH 1 1 (Photo card on phone side)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/5255b2593fe368934785928b8cd87abc89a46105.png', dest: 'public/assets/images/pcr-poster-1.png', layer: 'full time MATCH 5 1 (Match 5 poster)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/4de823950b42a34629bc52cae2671ff36e83a660.png', dest: 'public/assets/images/pcr-poster-2.png', layer: 'HALF time MATCH 5 1 (Half time poster)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/d00448eccef7cce5b26368a181fd05985b5eb190.png', dest: 'public/assets/images/pcr-poster-3.png', layer: 'POTG MATCH 2 1 (Player of the game poster)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/60c482697a6cad5133797eed2325a77e806e4aee.png', dest: 'public/assets/images/pcr-poster-4.png', layer: 'Calling Crowd 1 (Calling crowd poster)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/494e1a602bfa79956d737a3a403e4ee3258356a0.png', dest: 'public/assets/images/pcr-poster-5.png', layer: 'FINAL MATCH 1 (Final match poster)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/4e3e179a6349dfb310410791fcf06ca3a1b00ea5.svg', dest: 'public/assets/icons/pcr-ball-sticker.svg', layer: 'Vector (Basketball white wireframe sticker)', section: 'pcr-cup' },
  { url: 'http://localhost:3845/assets/2e324886553338c359cad7e4defcd138b5982b98.svg', dest: 'public/assets/icons/icon-ig-square.svg', layer: 'material-symbols:mail-outline / Instagram icon red', section: 'pcr-cup, jti-expo' },

  // JTI Expo
  { url: 'http://localhost:3845/assets/f0e5ad6de9fcdc15acf2216acfe3807b73793472.png', dest: 'public/assets/mockups/jti-signboard.png', layer: 'Screenshot-Sign board (Poster board mockup)', section: 'jti-expo' },
  { url: 'http://localhost:3845/assets/80ce3dad18d3dbb8d62b44049d35d49b8e04d98a.png', dest: 'public/assets/mockups/jti-3d-logo.png', layer: 'Rectangle (3D JTI Expo logo in front of board)', section: 'jti-expo' },
  { url: 'http://localhost:3845/assets/798d11ddcc9912a7c294ce5e1885a288d27bae1e.svg', dest: 'public/assets/stickers/jti-smile-circle.svg', layer: 'Smile Sticker base on JTI board', section: 'jti-expo' },
  { url: 'http://localhost:3845/assets/aee94cddd215ac544ab8f632aefd5d1c17992df2.svg', dest: 'public/assets/stickers/jti-smile-face.svg', layer: 'gg:smile on JTI board', section: 'jti-expo' },

  // 4C National Competition
  { url: 'http://localhost:3845/assets/27bb988a2711fdae9ab371f7804e12396838d6b3.png', dest: 'public/assets/mockups/arvana-phone-left.png', layer: 'iPhone Space Silver Left 1 (ARVANA 3D angled mockup)', section: '4c' },
  { url: 'http://localhost:3845/assets/f98519eb5eaab048759d3348e24ef60562f9a688.png', dest: 'public/assets/mockups/arvana-phone-right.png', layer: 'iPhone Space Silver Right 1 (ARVANA 3D angled mockup)', section: '4c' },
  { url: 'http://localhost:3845/assets/6ee24a76cf9721a90e784c702b5cb34444d1a928.png', dest: 'public/assets/images/arvana-screen-1.png', layer: 'Landing Page 1 (ARVANA app screen 1)', section: '4c' },
  { url: 'http://localhost:3845/assets/6b7fbc013f755d1e05c1163db2853b59d45151f6.png', dest: 'public/assets/images/arvana-screen-2.png', layer: 'Home 1 (ARVANA app screen 2)', section: '4c' },
  { url: 'http://localhost:3845/assets/134e9799ee90609abd65132e173bc81bec84b95b.png', dest: 'public/assets/images/arvana-screen-3.png', layer: 'Product 1 (ARVANA app screen 3)', section: '4c' },
  { url: 'http://localhost:3845/assets/652ce21d28a779402f8a047a5f9574a3addb7aed.png', dest: 'public/assets/images/arvana-screen-4.png', layer: 'Payment 1 (ARVANA app screen 4)', section: '4c' },
  { url: 'http://localhost:3845/assets/cadbf4d332667eb88de713270512e2176d75abd0.png', dest: 'public/assets/images/arvana-screen-5.png', layer: 'Payment Done 1 (ARVANA app screen 5)', section: '4c' },

  // Personal Works
  { url: 'http://localhost:3845/assets/b8c39abc79587ace90f99d8f002006044d0a6ac7.png', dest: 'public/assets/images/street-1.png', layer: 'IMG_5495.JPG 1 (Street Photography photo 1)', section: 'works' },
  { url: 'http://localhost:3845/assets/223ec3219556656b41f9986b205734b704330a58.png', dest: 'public/assets/images/street-2.png', layer: 'IMG_5496.JPG 1 (Street Photography photo 2)', section: 'works' },
  { url: 'http://localhost:3845/assets/9addeb4e13a47d1d3f9b762cecf409516685b9e1.png', dest: 'public/assets/images/wedding-1.png', layer: 'DSC08095 1 (Wedding Photography photo 1)', section: 'works' },
  { url: 'http://localhost:3845/assets/a2020f32b30b60ea0cd48eed0144ef6d6bb0868f.png', dest: 'public/assets/images/wedding-2.png', layer: 'DSC08295 1 (Wedding Photography photo 2)', section: 'works' },
  { url: 'http://localhost:3845/assets/0720297efb3dc3d1df3ed808a9489c003d47105d.png', dest: 'public/assets/images/sketch-1.png', layer: 'WhatsApp Image (Sketching & Drawing photo 1)', section: 'works' },
  { url: 'http://localhost:3845/assets/d8cb0018f2663d32b04ba204639d4a930a9cc9a6.png', dest: 'public/assets/images/sketch-2.png', layer: 'WhatsApp Image (Sketching & Drawing photo 2)', section: 'works' },
  { url: 'http://localhost:3845/assets/48e4bdaba5a4509861abf2bdd0d63d8765dc05e4.png', dest: 'public/assets/images/3d-animation-1.png', layer: 'image 6 (3D Animation Project render 1)', section: 'works' },
  { url: 'http://localhost:3845/assets/acd25c0cd53e59db9786ee91b3e81a4415464106.png', dest: 'public/assets/images/3d-animation-2.png', layer: 'WFH OFFICE (3D Animation Project render 2)', section: 'works' },
  { url: 'http://localhost:3845/assets/3d752b06b26a6368f984f16050e5025e8b8df2fb.svg', dest: 'public/assets/images/timeline-line.svg', layer: 'Line 2 (Dashed vertical line in Personal Works)', section: 'works' },
  { url: 'http://localhost:3845/assets/7f3592c28d97e8103ce0e00e6c74237d4348de6c.svg', dest: 'public/assets/stickers/pw-always-circle.svg', layer: 'Quotes sticker base on Personal Works "o"', section: 'works' },
  { url: 'http://localhost:3845/assets/dbff240efecab28dd22475ac47308ba3347cbf55.svg', dest: 'public/assets/stickers/pw-always-star.svg', layer: 'Quotes star on Personal Works "o"', section: 'works' },
  { url: 'http://localhost:3845/assets/4e6c8786ee90886f385913d0eff723a7365e11f8.svg', dest: 'public/assets/stickers/pw-always-text.svg', layer: 'Quotes text on Personal Works "o"', section: 'works' },
  { url: 'http://localhost:3845/assets/86c575572bad19aa6c6c2493b6dff57c80331de2.svg', dest: 'public/assets/stickers/pw-smile-circle.svg', layer: 'Sticker smile base on Personal Works second "o"', section: 'works' },
  { url: 'http://localhost:3845/assets/0c2758894b469f8c603e78060ee4a45e451cb0fd.svg', dest: 'public/assets/stickers/pw-smile-face.svg', layer: 'Sticker smile face on Personal Works second "o"', section: 'works' },
  { url: 'http://localhost:3845/assets/3eca4db51b2b6a7ab564b344c93e671ad85f0d46.svg', dest: 'public/assets/icons/timeline-dot.svg', layer: 'Ellipse 29 (Black dot on category title)', section: 'works' },
  { url: 'http://localhost:3845/assets/dc1f25b1ca5028e9551c5a11fc58f1b2fe487ab5.png', dest: 'public/assets/stickers/emoji-3d-laughing.png', layer: 'Rectangle (3D laughing emoji with tongue out)', section: 'works' },

  // Thanks / Closing
  { url: 'http://localhost:3845/assets/4609b247443467c20a3d90cf73cea6fc30c04a6f.svg', dest: 'public/assets/images/thanks-blob-bottom.svg', layer: 'Ellipse 37 (Bottom gradient blob in Thanks)', section: 'contact' },
  { url: 'http://localhost:3845/assets/a47b4de6e218a51f2f2c9c4cc839b27c9ed2e5a5.svg', dest: 'public/assets/images/thanks-blob-top.svg', layer: 'Ellipse 37 (Top gradient blob in Thanks)', section: 'contact' },
  { url: 'http://localhost:3845/assets/e2b9371af27a56a00ab9615b22bcc2b26a4b6dc6.svg', dest: 'public/assets/images/thanks-line.svg', layer: 'Line 1 (Vertical divider line in Thanks)', section: 'contact' },
  { url: 'http://localhost:3845/assets/d05db03fbfbb1e9cc20706181e41a6ee04368ebb.svg', dest: 'public/assets/images/thanks-blob-right.svg', layer: 'Ellipse 36 (Right peach/orange gradient blob in Thanks)', section: 'contact' },
  { url: 'http://localhost:3845/assets/cac39b97b17fd9571806bac16a7264aa07539f09.svg', dest: 'public/assets/images/thanks-blob-left.svg', layer: 'Ellipse 39 (Left blue gradient blob in Thanks)', section: 'contact' },

  // Common blobs
  { url: 'http://localhost:3845/assets/25c1ad77977aaba8fb9e3797a5d0812b6fae59e7.svg', dest: 'public/assets/images/works-blob-white-overlay.svg', layer: 'Ellipse 25 (White glow overlay in Works)', section: 'works' },
  { url: 'http://localhost:3845/assets/51650e12432bf9c9091322ea9b2a77c14fc67f37.svg', dest: 'public/assets/images/works-blob-top-right.svg', layer: 'Ellipse 9 (Orange gradient blob in Works)', section: 'works' },
  { url: 'http://localhost:3845/assets/7b85e89bcf23dbfdf297f07a010b3578f06d5f2a.svg', dest: 'public/assets/images/works-blob-mid-right.svg', layer: 'Ellipse 33 (Gradient blob near JTI Expo)', section: 'works' },
  { url: 'http://localhost:3845/assets/26ea40880866eb8ed3c621b98bec53a330e08ca5.svg', dest: 'public/assets/images/works-blob-bottom-right.svg', layer: 'Ellipse 35 (Gradient blob near 4C)', section: 'works' },
  { url: 'http://localhost:3845/assets/2916968902335ff882f14e86d44f058a619f0245.svg', dest: 'public/assets/images/works-blob-mid-left.svg', layer: 'Ellipse 34 (Blue gradient blob near PCR Cup)', section: 'works' },
  { url: 'http://localhost:3845/assets/ccd6d4e6a49370d031a8967c2623ebf954bb1476.svg', dest: 'public/assets/images/works-blob-bottom-left.svg', layer: 'Ellipse 27 (Gradient blob bottom left of 4C)', section: 'works' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.resolve(dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    const file = fs.createWriteStream(fullDest);
    http.get(url, (response) => {
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(fullDest);
        return reject(new Error(`Failed to download ${url}: status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(fullDest)) fs.unlinkSync(fullDest);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  let success = 0;
  let failed = 0;
  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.dest);
      console.log(`✓ [${asset.section}] ${asset.dest}`);
      success++;
    } catch (err) {
      console.error(`✗ [${asset.section}] ${asset.dest}: ${err.message}`);
      failed++;
    }
  }
  console.log(`Download finished: ${success} succeeded, ${failed} failed.`);

  // Generate asset-manifest.md
  let manifest = `# Asset Manifest — Portofolio M. Othmar Safaraz\n\n`;
  manifest += `Total Asset Diekspor: ${assets.length}\n`;
  manifest += `Status: ${success} Berhasil, ${failed} Gagal\n\n`;
  manifest += `| Nama File Lokal | Section | Layer / Deskripsi Figma | URL Sumber (Figma MCP Localhost) |\n`;
  manifest += `|---|---|---|---|\n`;
  for (const a of assets) {
    manifest += `| \`/${a.dest.replace('public/', '')}\` | \`${a.section}\` | ${a.layer} | \`${a.url}\` |\n`;
  }
  fs.mkdirSync('docs', { recursive: true });
  fs.writeFileSync('docs/asset-manifest.md', manifest);
  console.log('Generated docs/asset-manifest.md');
}

run();
