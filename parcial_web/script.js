document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });


    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetear mensajes de error
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.style.display = 'none';
            msg.textContent = '';
        });

        // Validar campos
        let isValid = true;
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const asunto = document.getElementById('asunto');
        const mensaje = document.getElementById('mensaje');

        // Validar nombre  de la princesa
        if (nombre.value.trim() === '') {
            document.getElementById('nombre-error').textContent = 'Por favor ingresa tu nombre princesa';
            document.getElementById('nombre-error').style.display = 'block';
            isValid = false;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById('email-error').textContent = 'Por favor ingresa un email válido';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        // Validar asunto
        if (asunto.value.trim() === '') {
            document.getElementById('asunto-error').textContent = 'Por favor ingresa un asunto';
            document.getElementById('asunto-error').style.display = 'block';
            isValid = false;
        }

        // Validar mensaje
        if (mensaje.value.trim() === '') {
            document.getElementById('mensaje-error').textContent = 'Por favor ingresa un mensaje';
            document.getElementById('mensaje-error').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Mostrar mensaje en consola
            console.log(`Gracias ${nombre.value.trim()} por contactarte por ${asunto.value.trim()}. Te responderemos pronto.`);

            // Mostrar mensaje en el DOM
            formMessage.textContent = `Gracias ${nombre.value.trim()} por contactarte. Te responderemos pronto.`;
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';

            // Enviar formulario (simulado)
            setTimeout(() => {
                // Aquí normalmente se haría el fetch al PHP
                contactForm.submit();
            }, 2000);
        }
    });

    // Calculadora de descuento
    const calcularBtn = document.getElementById('calcular-descuento');
    calcularBtn.addEventListener('click', function() {
        const precioBase = parseFloat(document.getElementById('precio-base').value);
        const porcentaje = parseFloat(document.getElementById('porcentaje-descuento').value);
        const resultado = document.getElementById('resultado-descuento');

        if (isNaN(precioBase) || isNaN(porcentaje)) {
            resultado.textContent = 'Por favor ingresa valores válidos';
            resultado.style.color = 'var(--accent-color)';
            return;
        }

        if (porcentaje < 0 || porcentaje > 100) {
            resultado.textContent = 'El porcentaje debe estar entre 0 y 100';
            resultado.style.color = 'var(--accent-color)';
            return;
        }

        const descuento = precioBase * (porcentaje / 100);
        const precioFinal = precioBase - descuento;

        resultado.innerHTML = `
            <p>Precio original: $${precioBase.toFixed(2)}</p>
            <p>Descuento (${porcentaje}%): $${descuento.toFixed(2)}</p>
            <p style="font-size: 1.5rem; color: var(--primary-color);">Precio final: $${precioFinal.toFixed(2)}</p>
        `;
        resultado.style.color = 'inherit';
    });
});