import { Injectable, WritableSignal, computed, signal } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class signalService {
    private count:WritableSignal<number> = signal(0)

    displayCount = computed(() => this.count())

    incrementCount() {
        this.count.update(() => this.count() + 1)
    }
}