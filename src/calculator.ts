let a: string = '';
let b: string = '';
let sign: string = '';
let finish: boolean = false;

const integer: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action: string[] = ['-', '+', 'X', '/'];

const view: HTMLElement | null = document.querySelector('.calc-view');

function clear(): void {
    a = '';
    b = '';
    sign = '';
    finish = false;
    if (view) view.textContent = '0';
}

document.querySelector('.ac')?.addEventListener('click', clear);

document.querySelector('.buttonContainer')?.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('btn')) return;
    if (target.classList.contains('ac')) return;

    if (view) view.textContent = '';

    const key: string = target.textContent || '';

    if (integer.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            if (view) view.textContent = a;
        } else if (a !== '' && sign !== '' && finish) {
            b = key;
            finish = false;
            if (view) view.textContent = b;
        } else {
            b += key;
            if (view) view.textContent = b;
        }
        return;
    }

    if (action.includes(key)) {
        sign = key;
        if (view) view.textContent = sign;
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (parseInt(a) + parseInt(b)).toString();
                break;
            case '-':
                a = (parseInt(a) - parseInt(b)).toString();
                break;
            case 'X':
                a = (parseInt(a) * parseInt(b)).toString();
                break;
            case '/':
                if (b === '0') {
                    if (view) view.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = (parseInt(a) / parseInt(b)).toString();
                break;
        }
        finish = true;
        if (view) view.textContent = a;
    }
});


