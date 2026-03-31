import { PrismaClient, Platform, LiveStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  const shop = await prisma.shop.upsert({
    where: { email: 'demo@livecommerce.local' },
    update: {},
    create: {
      name: 'ร้านเดโม่ไลฟ์สด',
      slug: 'demo-live-shop',
      ownerName: 'แม่ค้าเดโม่',
      email: 'demo@livecommerce.local',
      passwordHash,
      phone: '0812345678',
      reservationMins: 30,
      blacklistThreshold: 3,
      products: {
        create: [
          {
            name: 'เสื้อยืด Oversize',
            code: 'A01',
            price: 290,
            cost: 150,
            variants: {
              create: [
                { name: 'สีดำ / M', sku: 'A01-BLK-M', stock: 20 },
                { name: 'สีขาว / L', sku: 'A01-WHT-L', stock: 15 }
              ]
            }
          },
          {
            name: 'กางเกงยีนส์ทรงกระบอก',
            code: 'B02',
            price: 590,
            cost: 320,
            variants: {
              create: [{ name: 'ไซส์ 30', sku: 'B02-30', stock: 10 }]
            }
          }
        ]
      },
      platforms: {
        create: {
          platform: Platform.FACEBOOK,
          pageId: 'demo-page-id',
          pageName: 'Demo Live Commerce',
          accessToken: 'demo-token'
        }
      }
    },
    include: { platforms: true }
  });

  await prisma.liveSession.create({
    data: {
      shopId: shop.id,
      platformConnId: shop.platforms[0].id,
      title: 'ไลฟ์เปิดร้านประจำวัน',
      status: LiveStatus.PREPARING
    }
  });

  console.log('✅ Seed completed');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
