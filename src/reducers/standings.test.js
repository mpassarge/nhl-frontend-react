import reducer from './standings';

describe('Standings Reducer', () => {
    describe('Pinning', () => {
        test('should pin a single division', () => {
            const state = {
                divisions: [
                    {
                        id: 1,
                        pinned: false,
                        teams: []
                    },
                    {
                        id: 2,
                        pinned: false,
                        teams: []
                    },
                    {
                        id: 3,
                        pinned: false,
                        teams: []
                    },
                ]
            };
            const actualState = reducer(state, { type: 'PIN_DIVISION', payload: 2});
            expect([2,1,3]).toEqual(actualState.divisions.map(d => d.id));
            expect(actualState.divisions[0].pinned).toEqual(true);
        });

        test('should pin multiple divisions', () => {
            const state = {
                divisions: [
                    {
                        id: 1,
                        pinned: false,
                        teams: []
                    },
                    {
                        id: 2,
                        pinned: false,
                        teams: []
                    },
                    {
                        id: 3,
                        pinned: false,
                        teams: []
                    },
                ]
            };
            const state1 = reducer(state, { type: 'PIN_DIVISION', payload: 2});
            const actualState = reducer(state1, { type: 'PIN_DIVISION', payload: 3});
            expect([2,3,1]).toEqual(actualState.divisions.map(d => d.id));
            expect(actualState.divisions[0].pinned).toEqual(true);
            expect(actualState.divisions[1].pinned).toEqual(true);
        });

        test('should unpin a division', () => {
            const state = {
                divisions: [
                    {
                        id: 1,
                        pinned: false,
                        teams: []
                    },
                    {
                        id: 2,
                        pinned: false,
                        teams: []
                    },
                    {
                        id: 3,
                        pinned: false,
                        teams: []
                    },
                ]
            };
            const pinnedTwo = reducer(state, { type: 'PIN_DIVISION', payload: 2});
            const actualState = reducer(pinnedTwo, { type: 'PIN_DIVISION', payload: 2});
            expect([1,2,3]).toEqual(actualState.divisions.map(d => d.id));
            expect(actualState.divisions[1].pinned).toEqual(false);
        })
    });
})