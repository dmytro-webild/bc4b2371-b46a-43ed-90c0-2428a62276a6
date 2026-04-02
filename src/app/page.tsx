"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Rocket, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Catalog",
          id: "products",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Liquid Spot"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Жидкости, которые взрывают вкусом"
      description="Liquid Spot — это премиальные вкусы Elfliq и Chaser. Сочно, ярко и быстро. Ваш лучший вейп-опыт начинается здесь."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=1",
          imageAlt: "Hero 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=1",
          imageAlt: "Hero 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=2",
          imageAlt: "Hero 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=2",
          imageAlt: "Hero 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=3",
          imageAlt: "Hero 5",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=3",
          imageAlt: "Hero 6",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=4",
          imageAlt: "Hero 7",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=4",
          imageAlt: "Hero 8",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=5",
          imageAlt: "Hero 9",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=5",
          imageAlt: "Hero 10",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=6",
          imageAlt: "Hero 11",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=6",
          imageAlt: "Hero 12",
        },
      ]}
      buttons={[
        {
          text: "Попробовать хит",
          href: "#products",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-attractive-man-wearing-specs-looking-far-away-isolated-dark-neon-purple-color-background_231208-14359.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-sunglasses_23-2149439866.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/diverse-cultural-fashion-portrait_23-2151874300.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-gray-dress-shirt-wearing-black-white-cap_410324-111.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-blue-wig-sitting-stairs-modern_158595-4333.jpg",
          alt: "User 5",
        },
      ]}
      avatarText="Более 500+ довольных вейперов"
      marqueeItems={[
        {
          type: "text",
          text: "Elfliq",
        },
        {
          type: "text",
          text: "Chaser",
        },
        {
          type: "text",
          text: "Premium",
        },
        {
          type: "text",
          text: "Original",
        },
        {
          type: "text",
          text: "Vape Lab",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Сочные профили",
          description: "Насыщенные фруктовые и ягодные миксы от лидеров рынка.",
          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/frozen-grapefruit_23-2148176353.jpg?_wi=1",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-sliced-melon-plate-white-background_141793-14266.jpg?_wi=1",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BoE80PaxsFJGHeOZDxjk7Eeddl/uploaded-1775146875819-h6lpl4fy.png",
          imageAlt: "User provided image",
        },
        {
          title: "Гарантия качества",
          description: "Только оригинальная продукция Elfliq и Chaser.",
          icon: Shield,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-sliced-melon-plate-white-background_141793-14266.jpg?_wi=2",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/frozen-pomegranate-seeds_23-2148176345.jpg?_wi=1",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-vaping-from-hookah-bar_23-2149194184.jpg?_wi=7",
          imageAlt: "vape liquid commercial 3d render neon",
        },
        {
          title: "Быстрая доставка",
          description: "Оперативная отправка, чтобы вы не ждали свой любимый вкус.",
          icon: Rocket,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/frozen-pomegranate-seeds_23-2148176345.jpg?_wi=2",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/frozen-grapefruit_23-2148176353.jpg?_wi=2",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-formed-by-color-dissolving-water_1112-1893.jpg?_wi=7",
          imageAlt: "vape bottles neon glow dark background",
        },
      ]}
      title="Почему Liquid Spot?"
      description="Мы выбираем только лучшее для наших клиентов, обеспечивая идеальный баланс цены и вкуса."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Elfliq Watermelon Ice",
          price: "450 ₽",
          variant: "20мг",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-vials-pills_23-2148021460.jpg",
        },
        {
          id: "p2",
          name: "Chaser Strawberry Mint",
          price: "420 ₽",
          variant: "20мг",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-paper-bag_23-2148081023.jpg",
        },
        {
          id: "p3",
          name: "Elfliq Mango Peach",
          price: "450 ₽",
          variant: "50мг",
          imageSrc: "http://img.b2bpic.net/free-photo/energy-drink-bottle-with-neon-lights_23-2152017170.jpg?_wi=1",
        },
        {
          id: "p4",
          name: "Chaser Triple Berry",
          price: "420 ₽",
          variant: "50мг",
          imageSrc: "http://img.b2bpic.net/free-photo/energy-drink-bottle-with-neon-lights_23-2152017170.jpg?_wi=2",
        },
        {
          id: "p5",
          name: "Elfliq Blueberry",
          price: "450 ₽",
          variant: "20мг",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-creative-illustration_23-2151980703.jpg",
        },
        {
          id: "p6",
          name: "Chaser Menthol",
          price: "420 ₽",
          variant: "20мг",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-purple-blue-cloud_53876-71298.jpg",
        },
      ]}
      title="Популярные вкусы"
      description="Выбирайте свой идеальный микс."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Александр",
          role: "Вейпер",
          testimonial: "Доставка просто космос! Вкусы всегда свежие, оригинал 100%.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-man-wearing-specs-looking-far-away-isolated-dark-neon-purple-color-background_231208-14359.jpg",
        },
        {
          id: "2",
          name: "Марина",
          role: "Клиент",
          testimonial: "Огромный выбор Elfliq. Теперь беру только тут, спасибо за баллы!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-sunglasses_23-2149439866.jpg",
        },
        {
          id: "3",
          name: "Иван",
          role: "Вейпер",
          testimonial: "Цены отличные, ребята шарят в теме и всегда советуют топчики.",
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-cultural-fashion-portrait_23-2151874300.jpg",
        },
        {
          id: "4",
          name: "Елена",
          role: "Постоянный покупатель",
          testimonial: "Liquid Spot — это любовь. Качественный сервис и отличные жидкости.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-gray-dress-shirt-wearing-black-white-cap_410324-111.jpg",
        },
        {
          id: "5",
          name: "Дмитрий",
          role: "Вейпер",
          testimonial: "Заказываю Chaser постоянно. Всегда быстро и качественно упаковано.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-blue-wig-sitting-stairs-modern_158595-4333.jpg",
        },
      ]}
      title="Что говорят наши клиенты"
      description="Liquid Spot выбирают за скорость и качество."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Как работает система лояльности?",
          content: "За каждую покупку вы получаете Liquid Drops, которые можно списать в корзине при следующем заказе.",
        },
        {
          id: "f2",
          title: "Как быстро вы доставляете?",
          content: "Мы отправляем заказы ежедневно, доставка занимает 1-2 дня по стране.",
        },
        {
          id: "f3",
          title: "Продукция оригинальная?",
          content: "Да, мы работаем только с официальными дистрибьюторами Elfliq и Chaser.",
        },
      ]}
      title="Частые вопросы"
      description="Все, что нужно знать о наших услугах."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Готовы заказать? Пишите нашему менеджеру в Telegram для консультации и помощи с выбором!"
      buttons={[
        {
          text: "Перейти в Telegram",
          href: "https://t.me/LSpotManager",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Liquid Spot",
          items: [
            {
              label: "О нас",
              href: "#hero",
            },
            {
              label: "Магазин",
              href: "#products",
            },
          ],
        },
        {
          title: "Поддержка",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Telegram",
              href: "https://t.me/LSpotManager",
            },
          ],
        },
        {
          title: "Правовая информация",
          items: [
            {
              label: "Политика конфиденциальности",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Liquid Spot. Все права защищены."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
