describe('App.ClickCountView', () => {
    let udpateEl, clickCounter, view

    beforeEach(()=> {
        updateEl = document.createElement('span')
        clickCounter = App.ClickCounter();
        view = App.ClickCountView(clickCounter, updateEl)
    })

    it('clickCounter를 주입하지 않으면 에러를 던진다', () => {
        const clickCounter = null;
        const updateEl = document.createElement('span');

        const actual = () => App.ClickCountView(clickCounter, updateEl);
        expect(actual()).toThrowError();
    })

    describe('updateView()', () => {
        it('ClickCounter의 getValue() 값을 출력한다', ()=> {
            const counterValue = clickCounter.getValue()
            view.updateView()
            expect(updateEl.innerHTML).toBe(counterValue.toString())
        })
    })

    describe('increaseAndUpdateView()는', ()=> {
        it('ClickCounter의 increase 를 실행한다', ()=> {
            // todo
        })

        it('updateView를 실행한다', ()=> {
            // todo
        })
    })
})