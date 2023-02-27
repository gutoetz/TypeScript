import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Figther {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,
  attack(enemy: Figther | SimpleFighter): void,
  special?(enemy: Figther | SimpleFighter): void,
  receiveDamage(attackPoints: number): number,
  levelUp(): void,
}