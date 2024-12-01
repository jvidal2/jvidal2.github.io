function translateToSpanish() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
        switch (heading.innerText.trim()) {
            case "Jalisco & SLP":
                heading.innerText = "Jalisco & SLP";
                break;
            case "Home":
                heading.innerText = "Inicio";
                break;
            case "Welcome to Jalisco & SLP!":
                heading.innerText = "¡Bienvenidos a Jalisco y SLP!";
                break;
            case "Services":
                heading.innerText = "Servicios";
                break;
            case "Tables and Chairs":
                heading.innerText = "Mesas y Sillas";
                break;
            case "Inflatable Games":
                heading.innerText = "Juegos Inflables";
                break;
            case "Mechanical Bull":
                heading.innerText = "Toro Mecánico";
                break;
            case "Gallery":
                heading.innerText = "Galería";
                break;
            case "Frequently Asked Questions":
                heading.innerText = "Preguntas frecuentes";
                break;
            case "Contact Us":
                heading.innerText = "Contáctenos";
                break;
        }
    });

    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p) => {
        switch (p.innerText.trim()) {
            case "As a family-owned business, we’re here to bring the spirit of celebration and fun to your events. Serving our community with pride, we specialize in renting tables, chairs, inflatable games, and our popular mechanical bull to make your gatherings unforgettable. Whether you’re planning a birthday party, wedding, or community event, we have everything you need to create a joyful and memorable experience.":
                p.innerText = "Como empresa familiar, estamos aquí para llevar el espíritu de celebración y diversión a sus eventos. Sirviendo a nuestra comunidad con orgullo, nos especializamos en el alquiler de mesas, sillas, juegos inflables y nuestro popular toro mecánico para que tus reuniones sean inolvidables.Si está planeando una fiesta de cumpleaños, una boda o un evento comunitario, tenemos todo lo que necesita para crear una experiencia alegre y memorable.";
                break;
            case "We’re proud to serve both English and Spanish-speaking customers, ensuring clear communication and exceptional service for everyone.":
                p.innerText = "Estamos orgullosos de atender a clientes de habla inglesa y española, garantizando una comunicación clara y un servicio excepcional para todos.";
                break;
            case "Explore our services below to find the perfect additions for your event. Click on the links to learn more about each option, view images of our rentals in action, and see how we can help bring your vision to life.":
                p.innerText = "Explore nuestros servicios a continuación para encontrar las adiciones perfectas para su evento. Haga clic en los enlaces para obtener más información sobre cada opción, ver imágenes de nuestros alquileres en acción y ver cómo podemos ayudarlo a hacer realidad su visión.";
                break;
            case "Thank you for visiting Jalisco & SLP—where family, fun, and quality service come together for your celebrations!":
                p.innerText = "¡Gracias por visitar Jalisco y SLP, donde la familia, la diversión y el servicio de calidad se unen para sus celebraciones!";
                break;
            case "Our sturdy, white rectangular folding table and chairs set is perfect for any event. Each table seats 6-8 guests and is ideal for indoor or outdoor use. Lightweight, durable, and easy to set up, this set adds a polished touch to any gathering!":
                p.innerText = "Nuestro resistente juego de mesa y sillas plegables rectangulares de color blanco es perfecto para cualquier evento. Cada mesa tiene capacidad para 6-8 personas y es ideal para uso en interiores o exteriores. ¡Ligero, duradero y fácil de instalar, este juego agrega un toque elegante a cualquier reunión!";
                break;
            case "Hourly Rate: $20":
                p.innerText = "Tarifa por hora: $20";
                break;
            case "Daily Rate: $100":
                p.innerText = "Tarifa diaria: $100";
                break;
            case "Bright and colorful bounce house with red, blue, green, and yellow towers, designed to bring excitement to any event. Perfect for kids' parties and gatherings, this bounce house offers a safe, fun-filled experience for hours of play!":
                p.innerText = "Casa inflable brillante y colorida con torres rojas, azules, verdes y amarillas, diseñada para brindar emoción a cualquier evento. ¡Perfecta para fiestas y reuniones infantiles, esta casa inflable ofrece una experiencia segura y llena de diversión durante horas de juego!";
                break;
            case "Hourly Rate: $50":
                p.innerText = "Tarifa por hora: $50";
                break;
            case "Daily Rate: $200":
                p.innerText = "Tarifa diaria: $200";
                break;
            case "Mechanical bull featuring a green inflatable platform with rustic wooden barriers and a realistic bull ride, perfect for parties, events, and gatherings. Safe and fun for all ages, this attraction adds a thrilling experience to any occasion.":
                p.innerText = "Toro mecánico que cuenta con una plataforma inflable verde con barreras de madera rústica y un paseo realista, perfecto para fiestas, eventos y reuniones. Segura y divertida para todas las edades, esta atracción añade una experiencia emocionante a cualquier ocasión.";
                break;
            case "Hourly Rate: $100":
                p.innerText = "Tarifa por hora: $100";
                break;
            case "Daily Rate: $400":
                p.innerText = "Tarifa diaria: $400";
                break;
            case "You can book our services by contacting us through our Contact Page or by calling us directly.":
                p.innerHTML = "Puede reservar nuestros servicios contactándonos a través de nuestra <a href='contact.html'>Página de contacto</a> o llamándonos directamente.";
                break;
            case "We serve the Monroe/Charlotte regions. If you're unsure if we can deliver to your location, please contact us for confirmation.":
                p.innerText = "Servimos a las regiones de Monroe/Charlotte. Si no está seguro de si podemos realizar entregas en su ubicación, comuníquese con nosotros para confirmarlo.";
                break;
            case "Yes, we provide full setup and delivery for all rentals. Additional fees may apply depending on location.":
                p.innerText = "Sí, proporcionamos configuración y entrega completa para todos los alquileres. Es posible que se apliquen cargos adicionales según la ubicación.";
                break;
            case "Cancellations must be made at least 48 hours in advance for a full refund. Cancellations made within 48 hours are subject to a fee.":
                p.innerText = "Las cancelaciones deben realizarse con al menos 48 horas de anticipación para obtener un reembolso completo. Las cancelaciones realizadas dentro de las 48 horas están sujetas a un cargo.";
                break;
            case "We recommend booking at least 2 weeks in advance to secure availability, especially during peak seasons.":
                p.innerText = "Recomendamos reservar con al menos 2 semanas de antelación para asegurar disponibilidad, especialmente durante temporadas altas.";
                break;
            case "Yes, all rentals require a signed agreement to ensure both parties understand the terms and conditions.":
                p.innerText = "Sí, todos los alquileres requieren un acuerdo firmado para garantizar que ambas partes comprendan los términos y condiciones.";
                break;
            case "You can make changes to your order up to 72 hours before your event. Please contact us as soon as possible to update your booking.":
                p.innerText = "Puedes realizar cambios en tu pedido hasta 72 horas antes de tu evento. Por favor contáctenos lo antes posible para actualizar su reserva.";
                break;
            case "For outdoor events, we recommend having a backup plan in case of bad weather. You can reschedule your booking without a penalty if you notify us 24 hours before your event.":
                p.innerText = "Para eventos al aire libre, recomendamos tener un plan de respaldo en caso de mal tiempo. Puedes reprogramar tu reserva sin penalización si nos avisas 24 horas antes de tu evento.";
                break;
            case "Have questions or want to book a service? Reach out to us below!":
                p.innerText = "¿Tienes preguntas o quieres reservar un servicio? ¡Comuníquese con nosotros a continuación!";
                break;
            case "Designed by JZV Creations© 2024, Certified in Responsive Web Design, Certified in JS":
                p.innerHTML = "Diseñado por <a href='jzvcreations.com/index.html' target='_blank'>JZV Creations</a>&copy; 2024, <i><a href='https://www.freecodecamp.org/certification/jvidal2/responsive-web-design' target='_blank'>Certificada en Diseño Web Responsivo</a></i>, <i><a href='https://www.freecodecamp.org/certification/jvidal2/javascript-algorithms-and-data-structures' target='_blank'>Certificada en JS</a></i>";
                break;
        }
    });

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        switch (link.innerText.trim()) {
            case "Home":
                link.innerText = "Inicio";
                break;
            case "Services":
                link.innerText = "Servicios";
                break;
            case "Gallery":
                link.innerText = "Galería";
                break;
            case "Contact Us":
                link.innerText = "Contáctenos";
                break;
            case "FAQ":
                link.innerText = "Preguntas frecuentes";
                break;
        }
    });

    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
        switch (label.innerText.trim()) {
            case "Name:":
                label.innerText = "Nombre:";
                break;
            case "Email:":
                label.innerText = "Correo Electrónico:";
                break;
            case "Phone Number:":
                label.innerText = "Número de Teléfono:";
                break;
            case "Message:":
                label.innerText = "Mensaje:";
                break;
            case "Tables":
                label.innerText = "Mesas";
                break;
            case "Chairs":
                label.innerText = "Sillas";
                break;
            case "Mechanical Bull":
                label.innerText = "Toro Mecánico";
                break;
            case "Bounce House":
                label.innerText = "Casa de Salto";
                break;
        }
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        switch (button.innerText.trim()) {
            case "Translate to Spanish!":
                button.innerText = "¡Traducir a Español!";
                break;
            case "View Pricing":
                button.innerText = "Ver precios";
                break;
            case "Previous":
                button.innerText = "Anterior";
                break;
            case "Next":
                button.innerText = "Próximo";
                break;
            case "How do I book a service?":
                button.innerText = "¿Cómo reservo un servicio?";
                break;
            case "What areas do you serve?":
                button.innerText = "¿A qué áreas atiende?";
                break;
            case "Do you provide setup and delivery?":
                button.innerText = "¿Proporcionan configuración y entrega?";
                break;
            case "What is your cancellation policy?":
                button.innerText = "¿Cuál es su política de cancelación?";
                break;
            case "How much notice do I need to give for a booking?":
                button.innerText = "¿Con cuánta anticipación debo avisar para una reserva?";
                break;
            case "Do I need to sign a rental agreement?":
                button.innerText = "¿Necesito firmar un contrato de alquiler?";
                break;
            case "Can I change my order after booking?":
                button.innerText = "¿Puedo cambiar mi pedido después de reservar?";
                break;
            case "What happens if it rains on the day of my event?":
                button.innerText = "¿Qué pasa si llueve el día de mi evento?";
                break;
            case "Send Message":
                button.innerText = "Enviar mensaje";
                break;
        }
    });

    const legends = document.querySelectorAll('legend');
    legends.forEach((legend) => {
        switch (legend.innerText.trim()) {
            case "What service would you like to rent?":
                legend.innerText = "¿Qué servicio le gustaría alquilar?";
                break;
        }
    });
}
    document.querySelector('#translate-btn').addEventListener('click', translateToSpanish);