/**
 * Simulate data manager
 */
import { Injectable } from '@angular/core';
import { Cow, CowEntity, EmptyCowEntity } from './api';
import { COWS } from './api.mock';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {
  cows: CowEntity[] = this.prepareData(COWS.result);

  constructor() {}

  getCows(): CowEntity[] {
    return this.cows;
  }

  removeCow(id: number): boolean {
    this.cows = this.getCows().filter(c => c.id !== id);
    return true;
  }

  updateCow(cow: CowEntity): boolean {
    this.cows = this.getCows().map(c => {
      return c.id === cow.id ? cow : c;
    });
    return true;
  }

  createCow(): CowEntity {
    const newCow = {
      ...EmptyCowEntity,
      cowId: this.getCows()[this.getCows().length - 1].cowId + 1
    };

    this.cows = this.prepareData([...this.getCows(), newCow]);
    return this.cows[this.cows.length-1];
  }

  /**
   * Sort
   * Set id
   * Fill entities with the missed properties
   * @param data
   */
  private prepareData(data: Cow[]): CowEntity[] {
    return data
      .sort((a, b) => a.cowId - b.cowId)
      .map((val, index) => ({
        id: index,
        ...EmptyCowEntity,
        ...val
      }));
  }
}
