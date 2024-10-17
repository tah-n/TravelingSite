import { create } from 'zustand';

type State = {
    open: boolean;
    setOpen: () => void;
    tours: any[];
    setTours: (tours: any[]) => void;
    currentPage: string,
    setCurrentPage: (currentPage: string) => void;
    adults: number;
    increment: () => void;
    decrement: () => void;
    kids: number;
    increase: () => void;
    decrease: () => void;
}

type Event = {
  start: Date;
  end: Date;
}

interface EventStore {
  events: Event[];
  addEvent: (newEvent: Event) => void;
}

export const useProps = create<State>((set, get) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open})),
  tours: [],
  setTours: (tours) => set({ tours }),
  currentPage: 'homePage',
  setCurrentPage: (page) => set({ currentPage:page }),
  adults: 0,
  increment: () => set((state) => ({adults: state.adults + 1})),
  decrement: () => {
    const { adults } = get();
    if(adults > 0) {
      set((state) => ({adults:state.adults - 1}))
    }
  },
  kids: 0,
  increase: () => set((state) => ({kids:state.kids + 1})),
  decrease: () => {
    const { kids } = get();
    if(kids > 0) {
      set((state) => ({ kids:state.kids - 1 }))
    }
  }
}))

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  addEvent: (newEvent) => set((state) => ({ events: [...state.events, newEvent] }))
}))