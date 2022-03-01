class setting {
    constructor() {
        this.setting_area = document.createElement('div');
        this.setting_area.className = "setting";
        document.body.appendChild(this.window);

        this.list = new list_drive();
        //list에 element을 추가하고 mouseover동안 element가 나타나는 기능 추가
        //element의 z-index을 확인할 수 있는 기능 추가
        //element click시 해당 element z-index의 값을 조정하는 기능 추가
        //element 의 예하 button 클릭시 z-index 값을 1씩 조정하는 기능 추가
        //위 작업을 실시할 것
    }
}

class list_drive {
    constructor() {
        this.list = [];
        this.size = 0;
        this.list.lanth = 1;
    }

    app(element) {
        this.list[size] = element;
        size += 1
        this.list.length += 1;
    }

    delete(index) {
        this.list.splice(index, 1);
    }
}


