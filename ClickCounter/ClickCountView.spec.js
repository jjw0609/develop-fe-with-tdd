describe('App.ClickCountView 모듈', () => {
    let udpateEl, clickCounter, view

    beforeEach(()=> {
        updateEl = document.createElement('span')
        clickCounter = App.ClickCounter();
        view = App.ClickCountView(clickCounter, updateEl)
    })


    describe('updateView()', () => {
        it('ClickCounter의 getValue() 실행결과를 출력한다', ()=> {
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