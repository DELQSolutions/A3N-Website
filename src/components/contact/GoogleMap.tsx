"use client";

export function GoogleMap() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Visit our office or schedule a meeting
          </p>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6474499705756!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x1c0b7b3c4c0b7b3c!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
      </div>
    </section>
  );
}
