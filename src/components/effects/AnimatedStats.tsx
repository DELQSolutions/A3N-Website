"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
}

function AnimatedStat({ end, label, suffix = '+' }: StatProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-black text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <AnimatedStat end={230} label="Happy Customers" />
      <AnimatedStat end={789} label="Projects Completed" />
      <AnimatedStat end={890} label="Satisfied Clients" />
      <AnimatedStat end={15} label="Awards Won" />
    </div>
  );
}
