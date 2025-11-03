export interface UseScrollStepsOptions {
  initialStep?: number;
  scrollThreshold?: number;
  animationDuration?: number;
  onStepChange?: (step: number) => void;
  enableKeyboard?: boolean;
}

export interface UseScrollStepsReturn {
  currentStep: import('framer-motion').MotionValue<number>;
  currentStepRound: import('framer-motion').MotionValue<number>;
  totalSteps: number;
  goToStep: (step: number, immediate?: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export interface StepRange {
  start: number;
  end: number;
}

export interface UseStepAnimationOptions {
  stepRange: StepRange | number; // Can be a single step or a range
  transitionRange?: number;
  enterAnimation?: Record<string, any>;
  exitAnimation?: Record<string, any>;
}

export interface UseStepAnimationReturn {
  opacity: import('framer-motion').MotionValue<number>;
  scale: import('framer-motion').MotionValue<number>;
  y: import('framer-motion').MotionValue<number>;
  isActive: import('framer-motion').MotionValue<boolean>;
  progress: import('framer-motion').MotionValue<number>; // Progress within the range
  style: {
    opacity: import('framer-motion').MotionValue<number>;
    scale: import('framer-motion').MotionValue<number>;
    y: import('framer-motion').MotionValue<number>;
  };
}
