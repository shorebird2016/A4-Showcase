
import {animate, AnimationMetadata, keyframes, state, style, transition, trigger} from '@angular/animations';

// example of re-useable animation NOTE - when translate in percentage, it was % of it's container, pixel maybe better
export const slideAnim1 = trigger('slideAnim1', [
  state('from', style({ transform: 'translate(-100px, -300px) scale(0.2)', opacity: 0.1 })),
  state('to', style({ transform: 'translate(300px, -200px) scale(1.5)', opacity: 1 })),
  transition('from <=> to', animate('800ms ease-out'))
]);

// passing parameters of animation, more flexible and re-useable
// animate - from (-150,0) to (x,y) with scale from 0.1 to 2.5
export function SlideAnim(name: string, x: string, y: string, duration: number): AnimationMetadata {
  return trigger(name, [
    state('from', style({ transform: 'translate(-150px, 0) scale(0.1)', opacity: 0.1 })),
    state('to', style({ transform: 'translate(' + x + ', ' + y + ') scale(2.5)', opacity: 1 })),
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

// flying icons
export function flyIconAnim(name: string, xBegin: string, yBegin: string, xEnd: string, yEnd: string,
                            duration: number): AnimationMetadata {
  return trigger(name, [
    state('from', style({ transform: 'translate(' + xBegin + ', ' + yBegin + ')' })),
    state('to', style({ transform: 'translate(' + xEnd + ', ' + yEnd + ')' })),
    transition('from => to', animate(duration + 'ms ease-in'))
  ]);
}

// emerging from nothing(void state) to "appear" state
export function fadeInAnim(begin_style, end_style, duration) {
  return trigger('fadeInAnim', [
    state('void', begin_style),
    state('appear', end_style),
    transition(':enter',
      animate(duration + ' 200ms ease-out'))
  ]);
}

export function fadeOutAnim(duration) {
  return trigger('fadeOutAnim', [
    state('appear', style({ opacity: 1 })),
    state('void', style({ opacity: 0, transform: 'translateX(-200px) scale(0.3)'})),
    transition('appear => void', animate(duration + ' 100ms ease-out'))
  ]);
}

// anim_state = 'create', 'update', 'delete'
/*export function crudAnim(anim_state, duration, begin_style, end_style) {
  switch(anim_state) {
    case 'create':
      break;
    case 'update':
      break;
    case 'delete':
      break;
    default: return;
  }
  return trigger('crudAnim', [
    state('create', style({})),
    state('update', style({})),
    state('delete', style({})),
    transition()
  ])*/

// TODO can I control how far it runs??? USE AnimationBuilder.......
