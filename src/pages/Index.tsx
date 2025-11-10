import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Sparkles, ShoppingBag, Heart } from "lucide-react";
import heroImage from "@/assets/hero-trendora.jpg";
import braceletImage from "@/assets/product-bracelet.jpg";
import necklaceImage from "@/assets/product-necklace.jpg";
import earringsImage from "@/assets/product-earrings.jpg";

const Index = () => {
  const products = [
    {
      image: braceletImage,
      name: "سوار الأحلام الوردية",
      price: "299 ر.س",
      originalPrice: "399 ر.س",
    },
    {
      image: necklaceImage,
      name: "قلادة القلب الذهبي",
      price: "449 ر.س",
      originalPrice: "599 ر.س",
    },
    {
      image: earringsImage,
      name: "أقراط اللؤلؤ الفاخرة",
      price: "349 ر.س",
      originalPrice: "499 ر.س",
    },
  ];

  const testimonials = [
    {
      name: "سارة أحمد",
      comment: "إكسسوارات رائعة وجودة ممتازة! أحببت التصميمات الأنيقة والراقية.",
      rating: 5,
    },
    {
      name: "نور محمد",
      comment: "تجربة تسوق مميزة، المنتجات فاخرة والأسعار معقولة. أنصح بشدة!",
      rating: 5,
    },
    {
      name: "ليلى عبدالله",
      comment: "أفضل متجر إكسسوارات! كل قطعة تضيف لمسة جمال خاصة.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-soft/40 to-background">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/50 px-6 py-2 text-sm font-medium text-accent-foreground backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span>حملة جديدة</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-6xl">
                جمالك يبدأ
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  من التفاصيل
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
                اكتشفي مجموعتنا الحصرية من الإكسسوارات الفاخرة
                <br />
                التي تبرز أناقتك وثقتك في كل لحظة
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-gold-dark text-primary-foreground shadow-[var(--shadow-luxury)] transition-all duration-300 hover:shadow-xl text-lg px-8 py-6"
                >
                  <ShoppingBag className="ml-2 h-5 w-5" />
                  تسوّقي الآن
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-accent transition-all duration-300 text-lg px-8 py-6"
                >
                  شاهدي المجموعة
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-luxury)]">
                <img
                  src={heroImage}
                  alt="Trendora Accessories"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/30 blur-3xl animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">جودة فاخرة</h3>
              <p className="text-muted-foreground">منتجات مصنوعة بعناية فائقة</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">تصاميم مميزة</h3>
              <p className="text-muted-foreground">قطع فريدة تناسب أناقتك</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">توصيل سريع</h3>
              <p className="text-muted-foreground">شحن آمن لجميع المناطق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground lg:text-5xl">
              أفضل المنتجات
            </h2>
            <p className="text-lg text-muted-foreground">
              اختاري من مجموعتنا المنتقاة بعناية
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-rose-soft/20 to-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground lg:text-5xl">
              ماذا تقول عميلاتنا
            </h2>
            <p className="text-lg text-muted-foreground">
              آراء حقيقية من عميلات سعيدات
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-12 lg:p-20 text-center shadow-[var(--shadow-luxury)]">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-white lg:text-5xl">
                ابدأي رحلتك مع الجمال اليوم
              </h2>
              <p className="text-lg text-white/90 lg:text-xl">
                اكتشفي عالماً من الأناقة والتميز مع Trendora
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl transition-all duration-300 hover:scale-105 text-lg px-10 py-6 mt-8"
              >
                <ShoppingBag className="ml-2 h-5 w-5" />
                تسوّقي المجموعة الكاملة
              </Button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-2xl font-bold text-foreground">Trendora</h3>
          <p className="text-muted-foreground">
            متجرك الأول للإكسسوارات النسائية الفاخرة
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2024 Trendora. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
