'use client';
import { cn } from '@/lib/utils';
import { motion, type Transition, type MotionStyle } from 'motion/react';

export type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  onAnimationComplete?: () => void;
  style?: MotionStyle;
  duration?: number
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  onAnimationComplete,
  style,
  duration = 5
}: BorderTrailProps) {
  const defaultTransition: Transition = {
    repeat: Infinity,
    duration: duration,
    ease: 'linear',
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={transition || defaultTransition}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
