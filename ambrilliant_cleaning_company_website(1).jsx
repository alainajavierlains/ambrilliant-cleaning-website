import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";

export default function AMbrilliantCleaningWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AMbrilliant Cleaning Company</h1>
          <p className="text-lg md:text-xl mb-6">
            Making every space shine — homes, offices, and commercial spaces
          </p>
          <Button className="text-lg px-8 py-6 rounded-2xl">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg">
          AMbrilliant Cleaning Company is a trusted professional cleaning service dedicated to creating clean, healthy, and welcoming spaces. We proudly serve both homes and offices, providing reliable, high-quality cleaning tailored to each client’s needs. Our goal is simple: to give our customers peace of mind by delivering consistent results they can see and feel.
          <br /><br />
          We want people to know that we care about more than just cleaning. We respect your time, your property, and your standards. Our team uses safe, effective products, pays attention to detail, and treats every space as if it were our own. Whether it’s a family home or a busy workplace, AMbrilliant Cleaning Company is committed to making every space shine.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Professional Cleaning</h3>
              <p>We use high-quality products and proven methods to deliver spotless results.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Reliable & Trusted</h3>
              <p>Our team is dependable, friendly, and respectful of your space.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 text-center">
              <Sparkles className="mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Affordable Pricing</h3>
              <p>We offer competitive prices without compromising on quality.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Before & After Cleaning</h2>
          <p className="text-center mb-10">Real examples of homes and offices we clean and transform.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" alt="Dirty kitchen before cleaning" className="h-56 w-full object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Clean kitchen after cleaning" className="h-56 w-full object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" alt="Messy office before cleaning" className="h-56 w-full object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" alt="Clean office after cleaning" className="h-56 w-full object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a" alt="Dirty bathroom before cleaning" className="h-56 w-full object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1584622781867-1c5fe9581c89" alt="Clean bathroom after cleaning" className="h-56 w-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p>“Amazing service! My house has never looked this clean. Highly recommend.”</p>
              <p className="mt-3 font-semibold">– Sarah M.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p>“Very professional and on time. They did an excellent job with our office.”</p>
              <p className="mt-3 font-semibold">– James L.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p>“Affordable, friendly, and thorough. I will definitely book again.”</p>
              <p className="mt-3 font-semibold">– Maria R.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6">Ready for a cleaner space? Get in touch today.</p>
          <p className="font-semibold">Phone: 519-991-4756</p>
          <p className="font-semibold">Email: AMbrilliant@mail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AMbrilliant Cleaning Company. All rights reserved.
      </footer>
    </div>
  );
}
