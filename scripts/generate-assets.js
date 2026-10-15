/**
 * Script to automatically process screenshots from public/projects-images
 * into optimized WebP images inside public/assets/projects/<slug>/ and generate
 * public/assets/projects/gallery.json and assets/projects/gallery.json.
 * 
 * Usage:
 *   node scripts/generate-assets.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectConfigs = [
  {
    slug: 'zynkarashift',
    sourceDir: 'ZynkaraShift',
    images: [
      { file: 'dashboard_main.png', caption: 'Self-hosted PaaS dashboard with live service telemetry' },
      { file: 'deploy_modal.png', caption: 'One-click deployment modal from GitHub repos and Docker images' },
      { file: 'dashboard.png', caption: 'Container lifecycle orchestration and resource monitoring' },
      { file: 'zynkarashift_demo.webp', caption: 'AI deployment copilot diagnosing build failures from live logs' },
      { file: 'zynkarashift.jpeg', caption: 'Platform architecture overview and reverse proxy routing' }
    ]
  },
  {
    slug: 'raktagrid',
    sourceDir: 'RaktaGrid',
    images: [
      { file: 'public_search.png', caption: 'Zero-login public blood search with real-time stock availability' },
      { file: 'hospital_dashboard.png', caption: 'Hospital emergency operations command center and inventory ledger' },
      { file: 'blood_bank_queue.png', caption: 'Three-tier allocation dispatch queue with concurrency locks' },
      { file: 'dispatch_manifest.png', caption: 'Tamper-evident cold-chain dispatch manifest verification' },
      { file: 'donor_directory.png', caption: 'HMAC-SHA256 anonymized civic donor registry with 90-day cooldown' }
    ]
  },
  {
    slug: 'quicktask',
    sourceDir: 'QuikTask',
    images: [
      { file: 'tasks.png', caption: 'Interactive Kanban task board with priority workflow and deadlines' },
      { file: 'ai.png', caption: 'Scikit-Learn AI predictive productivity scoring and efficiency radar' },
      { file: 'admin.png', caption: 'Administrator command center with productivity telemetry' },
      { file: 'attendance.png', caption: 'Daily employee attendance tracking and active work hours' },
      { file: 'chat.png', caption: 'Real-time duplex WebSocket team messaging channel' },
      { file: 'employee.png', caption: 'Employee portal workspace and personal task trajectory' },
      { file: 'login.png', caption: 'Enterprise workspace authentication and sign-in portal' }
    ]
  },
  {
    slug: 'oceanvoyage',
    sourceDir: 'OceanVoyage',
    images: [
      { file: 'home.png', caption: 'Cruise booking exploration portal and voyage itinerary' },
      { file: 'cabins.png', caption: 'Interactive stateroom and cabin reservation with deck availability' },
      { file: 'conflict.png', caption: 'Real-time activity conflict warning for overlapping events' },
      { file: 'admin.png', caption: 'Maritime operations management console and passenger manifests' }
    ]
  },
  {
    slug: 'campyteq',
    sourceDir: 'campyteq',
    images: [
      { file: '02_executive_dashboard.png', caption: 'Executive dashboard with real-time institutional telemetry' },
      { file: '01_login_portal.png', caption: 'Institutional login portal with 12 granular RBAC roles' },
      { file: '03_analytics_ai_radar.png', caption: 'Explainable AI academic risk early warning radar' },
      { file: '04_attendance_radar.png', caption: 'Statutory 75% attendance defaulters tracking engine' },
      { file: '05_campus_safety_tracking.png', caption: 'Edge Computer Vision zone presence telemetry' },
      { file: '06_finance_fees.png', caption: 'Multi-college fee collection ledger and invoicing' },
      { file: '08_print_shop_kiosk.png', caption: 'Campus fast-print kiosk queue with 4-digit PIN verification' },
      { file: '09_student_academic_hub.png', caption: 'Student academic hub and course progression portal' },
      { file: '10_faculty_mentor_portal.png', caption: 'Faculty mentor portal and biometric timesheet logging' }
    ]
  },
  {
    slug: 'zynkaraauth',
    sourceDir: 'ZynkaraAuth',
    images: [
      { file: 'landing.png', caption: 'ZynkaraAuth centralized identity engine landing page' },
      { file: 'dashboard.png', caption: 'Developer console with OAuth clients and RBAC permissions' },
      { file: 'login.png', caption: 'Secure authentication portal with single sign-on' },
      { file: 'mfa.png', caption: 'Time-based one-time password (TOTP) MFA verification' },
      { file: 'signup.png', caption: 'Multi-tenant developer registration and organization setup' },
      { file: 'swagger.png', caption: 'Interactive OpenAPI/Swagger documentation and webhook endpoints' }
    ]
  },
  {
    slug: 'credsecure',
    sourceDir: 'credit card fraud detection',
    images: [
      { file: 'result.png', caption: 'Real-time fraud prediction result with risk scoring metrics' },
      { file: 'login.png', caption: 'Secure authentication portal for transaction analysts' }
    ]
  },
  {
    slug: 'noorjahan',
    sourceDir: 'Interior-design-showcase-noorjahan',
    images: [
      { file: 'about.png', caption: 'Interior design architectural showcase and spatial overview' },
      { file: 'education and skills.png', caption: 'Design philosophy, spatial expertise, and project concepts' }
    ]
  },
  {
    slug: 'wedding-platform',
    sourceDir: 'wedding company',
    images: [
      { file: 'home.png', caption: 'Wedding event company homepage and featured celebrations' },
      { file: 'gallery.png', caption: 'High-resolution media showcase and event photography gallery' },
      { file: 'service.png', caption: 'Event package configurator and premium services' },
      { file: 'contact.png', caption: 'Interactive client inquiry and booking pipeline' }
    ]
  },
  {
    slug: 'tictactoe-mobile',
    sourceDir: 'TicTacToe',
    images: [
      { file: 'tictactoe.png', caption: 'Interactive AI game board with Minimax algorithm' }
    ]
  }
];

async function run() {
  const publicDir = path.join(process.cwd(), 'public');
  const srcBaseDir = path.join(publicDir, 'projects-images');
  const targetBaseDir = path.join(publicDir, 'assets', 'projects');
  const gallery = {};

  for (const proj of projectConfigs) {
    const projTargetDir = path.join(targetBaseDir, proj.slug);
    fs.mkdirSync(projTargetDir, { recursive: true });
    gallery[proj.slug] = [];

    for (let i = 0; i < proj.images.length; i++) {
      const item = proj.images[i];
      const srcFile = path.join(srcBaseDir, proj.sourceDir, item.file);
      const outNum = String(i + 1).padStart(2, '0');
      const outFileName = `${proj.slug}-${outNum}.webp`;
      const destFile = path.join(projTargetDir, outFileName);

      if (fs.existsSync(srcFile)) {
        await sharp(srcFile)
          .webp({ quality: 85, effort: 4 })
          .toFile(destFile);

        const relPath = `/assets/projects/${proj.slug}/${outFileName}`;
        gallery[proj.slug].push({
          src: relPath,
          caption: item.caption
        });
        console.log(`Processed [${proj.slug}]: ${outFileName}`);
      } else {
        console.warn(`Warning: Missing file ${srcFile}`);
      }
    }
  }

  const galleryJson = JSON.stringify(gallery, null, 2);
  fs.writeFileSync(path.join(targetBaseDir, 'gallery.json'), galleryJson, 'utf-8');

  const rootAssetsProjects = path.join(process.cwd(), 'assets', 'projects');
  fs.mkdirSync(rootAssetsProjects, { recursive: true });
  fs.writeFileSync(path.join(rootAssetsProjects, 'gallery.json'), galleryJson, 'utf-8');

  console.log(`Successfully generated gallery.json with ${Object.keys(gallery).length} projects!`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
