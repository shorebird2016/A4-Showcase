
import {animate, AnimationMetadata, state, style, transition, trigger} from '@angular/animations';

// example of re-useable animation NOTE - when translate in percentage, it was % of it's container, pixel maybe better
export const slideAnim1 = trigger('slideAnim1', [
  state('from', style({ transform: 'translate(-100px, -300px) scale(0.2)', opacity: 0.1 })),
  state('to', style({ transform: 'translate(300px, -200px) scale(1.5)', opacity: 1 })),
  transition('from <=> to', animate('800ms ease-out'))
]);

// passing parameters of animation, more flexible and re-useable
export function SlideAnim(name: string, x: string, y: string, duration: number): AnimationMetadata {
  return trigger(name, [
    state('from', style({ transform: 'translate(-100px, -500px) scale(0.2)', opacity: 0.1 })),
    state('to', style({ transform: 'translate(' + x + ', ' + y + ') scale(1.5)', opacity: 1 })),
    transition('from <=> to', animate(duration + 'ms ease-in-out'))
  ]);
}

// use a class to do the job TODO maybe later
export class SlideAnimation {
  createTrigger(name: string, states?: AnimationMetadata[], transitions?: AnimationMetadata[]): any {
    const ret: AnimationMetadata[] = [
      state('from', style({ transform: 'translate(-100px, -500px) scale(0.2)', opacity: 0.1 })),
    ];
    return ret;
  }
}

// TODO can I control how far it runs??? USE AnimationBuilder.......
