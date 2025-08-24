document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS Y CONFIGURACIÓN ---
    const trainingData = {
        // ... (resto de la estructura de datos)
    };

    // --- INICIO DE LA BASE DE DATOS COMPLETA ---
    Object.assign(trainingData, {
        warmups: {
            day1: ["<strong>Cardio Ligero:</strong> 5 min", "<strong>Activación:</strong> Rotaciones hombro (2x15), Bird-dog (2x10/lado), Plancha (30s)", "<strong>Movilidad:</strong> Círculos brazos, Rotaciones torso"],
            day2: ["<strong>Cardio Ligero:</strong> 5 min", "<strong>Activación:</strong> Band pull-aparts (2x15), Remo banda (2x15), Puente glúteo (2x15)", "<strong>Movilidad:</strong> Dislocaciones hombro con banda, Elevaciones escapulares"],
            day3: ["<strong>Cardio Ligero:</strong> 5 min", "<strong>Activación:</strong> Puente glúteo (2x15), Patadas glúteo (2x15/lado), Sentadilla goblet ligera (2x10)", "<strong>Movilidad:</strong> Balanceos pierna, Círculos cadera"]
        },
        day1: { title: "Día 1: Pecho, Hombros y Tríceps", exercises: { "Press de Banca en Máquina": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Press Inclinado en Máquina": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "1-2" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Fondos en Paralelas": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "1-2" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Press de Hombro en Máquina": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Elevaciones Laterales con Mancuernas": { meso1: { series: "4", reps: "10-15", rir: "1-2" }, meso2: { series: "4", reps: "10-15", rir: "1-2" }, descarga: { series: "2", reps: "12-15", rir: "3-4" }, meso3: { series: "4", reps: "10-15", rir: "0-2" } }, "Máquina de Press de Tríceps Sentado": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "1-2" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Extensiones de Tríceps en Polea con Cuerda": { meso1: { series: "3", reps: "12-15", rir: "1-2" }, meso2: { series: "3", reps: "12-15", rir: "1-2" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "12-15", rir: "0-2" } } } },
        day2: { title: "Día 2: Espalda, Hombros y Bíceps", exercises: { "Dominadas (o Jalón al Pecho)": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Remo en Máquina Horizontal Divergente": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Remo Sentado en Banco con Polea Baja": { meso1: { series: "3", reps: "10-12", rir: "1-2", agarre: "Agarre Neutro" }, meso2: { series: "3", reps: "8-10", rir: "0-1", agarre: "Agarre Prono" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4", agarre: "Agarre Cómodo" }, meso3: { series: "3", reps: "10-12", rir: "0-2", agarre: "Agarre Neutro o Supino" } }, "Vuelos Posteriores en Máquina": { meso1: { series: "4", reps: "12-15", rir: "1-2" }, meso2: { series: "4", reps: "12-15", rir: "1-2" }, descarga: { series: "2", reps: "12-15", rir: "3-4" }, meso3: { series: "4", reps: "12-15", rir: "0-2" } }, "Encogimientos con Mancuernas": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "10-15", rir: "1-2" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" } }, "Curl de Bíceps en Máquina": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "6-10", rir: "0-1" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" } }, "Curl Martillo con Mancuernas": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "10-15", rir: "1-2" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" } } } },
        day3: { title: "Día 3: Piernas y Abdominales", exercises: { "Sentadilla Hack en Máquina": { meso1: { series: "4", reps: "8-12", rir: "1-2" }, meso2: { series: "4", reps: "6-10", rir: "0-1" }, descarga: { series: "2", reps: "10-12", rir: "3-4" }, meso3: { series: "4", reps: "8-12", rir: "0-2" } }, "Prensa de Piernas": { meso1: { series: "4", reps: "8-15", rir: "1-2" }, meso2: { series: "4", reps: "8-12", rir: "0-1" }, descarga: { series: "2", reps: "10-15", rir: "3-4" }, meso3: { series: "4", reps: "10-15", rir: "0-2" } }, "Curl Femoral": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "6-10", rir: "0-1" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" } }, "Sentadilla Goblet con Mancuerna": { meso1: { series: "3-4", reps: "8-15", rir: "1-2" }, meso2: { series: "3-4", reps: "6-10", rir: "0-1" }, descarga: { series: "2", reps: "10-12", rir: "3-4" }, meso3: { series: "3-4", reps: "8-12", rir: "0-2" } }, "Extensiones de Cuádriceps": { meso1: { series: "3", reps: "12-20", rir: "1-2" }, meso2: { series: "3", reps: "12-20", rir: "1-2" }, descarga: { series: "1-2", reps: "15-20", rir: "3-4" }, meso3: { series: "3", reps: "12-20", rir: "0-2" } }, "Hip Thrust en Máquina": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "0-1" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" } }, "Elevación de Talones": { meso1: { series: "4", reps: "10-20", rir: "1-2" }, meso2: { series: "4", reps: "10-20", rir: "1-2" }, descarga: { series: "2", reps: "15-20", rir: "3-4" }, meso3: { series: "4", reps: "10-20", rir: "0-2" } }, "Abdominales (Crunch en Máquina)": { meso1: { series: "3-4", reps: "12-15", rir: "1-2" }, meso2: { series: "3-4", reps: "10-15", rir: "0-1" }, descarga: { series: "2", reps: "15-20", rir: "2-3" }, meso3: { series: "3-4", reps: "12-15", rir: "0-1" } } } },
        exerciseLibrary: {
            "Press de Banca en Máquina": { description: "Siéntate con la espalda bien apoyada en el respaldo. Agarra las empuñaduras con una anchura ligeramente superior a la de los hombros. Empuja de forma controlada hasta extender los codos casi por completo y regresa lentamente a la posición inicial.", videoUrl: "" },
            "Press Inclinado en Máquina": { description: "Ajusta el asiento para que las empuñaduras queden a la altura de la parte superior de tu pecho. Mantén los codos ligeramente metidos y empuja hacia arriba y adelante, contrayendo la parte superior del pectoral.", videoUrl: "" },
            "Fondos en Paralelas": { description: "Con el cuerpo recto, baja de forma controlada hasta que tus hombros queden ligeramente por debajo de tus codos. Empuja con fuerza para volver a la posición inicial, enfocándote en el pecho y los tríceps.", videoUrl: "" },
            "Press de Hombro en Máquina": { description: "Siéntate con la espalda recta. Empuja las empuñaduras verticalmente hacia arriba hasta extender los brazos. Baja de forma controlada sin dejar que el peso descanse.", videoUrl: "" },
            "Elevaciones Laterales con Mancuernas": { description: "De pie, con una ligera flexión en los codos, eleva las mancuernas hacia los lados hasta que tus brazos estén paralelos al suelo. Concéntrate en usar los hombros y no el impulso.", videoUrl: "" },
            "Máquina de Press de Tríceps Sentado": { description: "Ajusta el asiento y empuja las empuñaduras hacia abajo hasta extender completamente los brazos. Siente la contracción en el tríceps y regresa de forma controlada.", videoUrl: "" },
            "Extensiones de Tríceps en Polea con Cuerda": { description: "De pie, con el torso ligeramente inclinado hacia adelante, tira de la cuerda hacia abajo separando las manos al final del movimiento para maximizar la contracción del tríceps.", videoUrl: "" },
            "Dominadas (o Jalón al Pecho)": { description: "Agarra la barra con las manos más anchas que tus hombros. Tira de tu cuerpo hacia arriba hasta que tu barbilla supere la barra, enfocándote en contraer los dorsales. Si usas jalón, lleva la barra al pecho.", videoUrl: "" },
            "Remo en Máquina Horizontal Divergente": { description: "Tira de las empuñaduras hacia tu torso, juntando las escápulas al final del movimiento. Controla la fase excéntrica (el regreso).", videoUrl: "" },
            "Remo Sentado en Banco con Polea Baja": { description: "Mantén la espalda recta. Tira del agarre hacia la parte baja de tu abdomen, retrayendo los omóplatos. Evita usar el impulso de la espalda baja.", videoUrl: "" },
            "Vuelos Posteriores en Máquina": { description: "Con el pecho apoyado, abre los brazos en un arco amplio, contrayendo la parte posterior de los hombros. Evita el balanceo.", videoUrl: "" },
            "Encogimientos con Mancuernas": { description: "De pie, sosteniendo una mancuerna pesada en cada mano, encoge los hombros hacia las orejas lo más alto posible. Mantén la contracción por un segundo.", videoUrl: "" },
            "Curl de Bíceps en Máquina": { description: "Ajusta el asiento para que tus codos estén alineados con el eje de rotación de la máquina. Realiza el curl de forma controlada, sintiendo la contracción máxima en el bíceps.", videoUrl: "" },
            "Curl Martillo con Mancuernas": { description: "Sostén las mancuernas con un agarre neutro (palmas enfrentadas). Flexiona los codos sin mover los hombros. Este ejercicio trabaja el braquial y el antebrazo además del bíceps.", videoUrl: "" },
            "Sentadilla Hack en Máquina": { description: "Coloca los pies a la anchura de los hombros en la plataforma. Baja de forma controlada hasta formar un ángulo de 90 grados en las rodillas o un poco más, manteniendo la espalda pegada al respaldo.", videoUrl: "" },
            "Prensa de Piernas": { description: "Baja la plataforma de forma controlada hasta que tus rodillas se acerquen al pecho, sin levantar la cadera del asiento. Empuja con toda la planta del pie para volver a la posición inicial.", videoUrl: "" },
            "Curl Femoral": { description: "Acuéstate o siéntate en la máquina y flexiona las rodillas para llevar el rodillo hacia tus glúteos. Concéntrate en contraer los isquiotibiales.", videoUrl: "" },
            "Sentadilla Goblet con Mancuerna": { description: "Sostén una mancuerna verticalmente contra tu pecho. Baja en una sentadilla profunda manteniendo el torso erguido y las rodillas alineadas con los pies.", videoUrl: "" },
            "Extensiones de Cuádriceps": { description: "Siéntate y extiende las piernas contra la resistencia hasta que estén rectas. Aprieta los cuádriceps en la parte superior del movimiento.", videoUrl: "" },
            "Hip Thrust en Máquina": { description: "Empuja la almohadilla con la cadera hacia arriba hasta que tu cuerpo forme una línea recta desde los hombros hasta las rodillas. Contrae los glúteos fuertemente en la cima.", videoUrl: "" },
            "Elevación de Talones": { description: "Eleva los talones lo más alto posible, contrayendo los gemelos. Baja lentamente por debajo de la horizontal para un estiramiento completo.", videoUrl: "" },
            "Abdominales (Crunch en Máquina)": { description: "Realiza un encogimiento abdominal contra la resistencia de la máquina, enfocándote en contraer el abdomen y no en tirar con los brazos o el cuello.", videoUrl: "" }
        }
    });
    // --- FIN DE LA BASE DE DATOS ---

    const trainingCalendar = { "2025-08-07": "day1", "2025-08-08": "day2", "2025-08-09": "descanso", "2025-08-10": "day3", "2025-08-11": "descanso", "2025-08-12": "day1", "2025-08-13": "day2", "2025-08-14": "day3", "2025-08-15": "descanso", "2025-08-16": "day1", "2025-08-17": "day2", "2025-08-18": "day3", "2025-08-19": "descanso", "2025-08-20": "day1", "2025-08-21": "day2", "2025-08-22": "day3", "2025-08-23": "descanso", "2025-08-24": "day1", "2025-08-25": "day2", "2025-08-26": "day3", "2025-08-27": "descanso", "2025-08-28": "day1", "2025-08-29": "day2", "2025-08-30": "day3", "2025-08-31": "descanso", "2025-09-01": "day1", "2025-09-02": "day2", "2025-09-03": "day3", "2025-09-04": "descanso", "2025-09-05": "day1", "2025-09-06": "day2", "2025-09-07": "day3", "2025-09-08": "descanso", "2025-09-09": "day1", "2025-09-10": "day2", "2025-09-11": "day3", "2025-09-12": "descanso", "2025-09-13": "day1", "2025-09-14": "day2", "2025-09-15": "day3", "2025-09-16": "descanso", "2025-09-17": "day1", "2025-09-18": "day2", "2025-09-19": "day3", "2025-09-20": "descanso", "2025-09-21": "day1", "2025-09-22": "day2", "2025-09-23": "day3", "2025-09-24": "descanso", "2025-09-25": "day1", "2025-09-26": "day2", "2025-09-27": "day3", "2025-09-28": "descanso", "2025-09-29": "day1", "2025-09-30": "day2", "2025-10-01": "day3", "2025-10-02": "descanso", "2025-10-03": "day1", "2025-10-04": "day2", "2025-10-05": "day3", "2025-10-06": "descanso", "2025-10-07": "day1", "2025-10-08": "day2", "2025-10-09": "day3", "2025-10-10": "descanso", "2025-10-11": "day1", "2025-10-12": "day2", "2025-10-13": "day3", "2025-10-14": "descanso", "2025-10-15": "day1", "2025-10-16": "day2", "2025-10-17": "day3", "2025-10-18": "descanso", "2025-10-19": "day1", "2025-10-20": "day2", "2025-10-21": "day3", "2025-10-22": "descanso", "2025-10-23": "day1", "2025-10-24": "day2", "2025-10-25": "day3", "2025-10-26": "descanso", "2025-10-27": "day1", "2025-10-28": "day2", "2025-10-29": "day3", "2025-10-30": "descanso", "2025-10-31": "day1", "2025-11-01": "day2", "2025-11-02": "day3", "2025-11-03": "descanso", "2025-11-04": "day1", "2025-11-05": "day2",};
    const startDate = new Date('2025-08-07T00:00:00');
    let currentDate = new Date();
    let timerInterval;

    const appContainer = document.getElementById('app');
    const exerciseModal = document.getElementById('exercise-modal');
    const timerModal = document.getElementById('timer-modal');

    const storageKey = 'gymProgressData';
    const getStoredData = () => JSON.parse(localStorage.getItem(storageKey)) || {};
    const setStoredData = (data) => localStorage.setItem(storageKey, JSON.stringify(data));

    function saveSetData(date, exercise, setIndex, field, value) {
        const data = getStoredData();
        const dateKey = getFormattedDate(date);
        if (!data[dateKey]) data[dateKey] = {};
        if (!data[dateKey][exercise]) data[dateKey][exercise] = [];
        if (!data[dateKey][exercise][setIndex]) data[dateKey][exercise][setIndex] = {};
        data[dateKey][exercise][setIndex][field] = value;
        setStoredData(data);
    }

    const getFormattedDate = (date) => date.toISOString().split('T')[0];
    
    /**
     * Calcula la semana actual del plan de entrenamiento.
     * **MODIFICADO:** La duración total del plan ahora es de 9 semanas.
     * @param {Date} date - La fecha actual.
     * @returns {number} El número de la semana actual (1-9).
     */
    function getCurrentWeek(date) {
        const diffTime = Math.max(0, date - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        return Math.min(9, Math.max(1, Math.ceil(diffDays / 7))); // Cambiado 13 a 9
    }

    /**
     * Determina el mesociclo actual basado en la semana.
     * **MODIFICADO:** Ahora sigue la secuencia Meso2 -> Descarga -> Meso3.
     * @param {number} week - La semana actual del plan.
     * @returns {{key: string, name: string}} El objeto con la clave y nombre del mesociclo.
     */
    function getMesocycle(week) {
        if (week <= 4) return { key: 'meso2', name: 'Mesociclo 2: Intensificación' }; // Semanas 1-4
        if (week === 5) return { key: 'descarga', name: 'Semana de Descarga' };      // Semana 5
        if (week <= 9) return { key: 'meso3', name: 'Mesociclo 3: Realización' };     // Semanas 6-9
        return { key: 'none', name: 'Fuera del plan' };
    }

    function renderApp() {
        appContainer.innerHTML = `
            <div id="workout-view" class="view active"></div>
            <div id="progress-view" class="view"></div>
        `;
        renderWorkoutView(currentDate);
        renderProgressView();
        setupViewListeners();
    }

    function renderWorkoutView(date) {
        const workoutView = document.getElementById('workout-view');
        const formattedDate = getFormattedDate(date);
        const dayType = trainingCalendar[formattedDate];
        
        if (dayType === 'descanso' || !dayType) {
            workoutView.innerHTML = `
                <div class="workout-header">
                    <div class="date-navigation">
                        <button class="nav-arrow" id="prev-day">&lt;</button>
                        <h1>Día de Descanso</h1>
                        <button class="nav-arrow" id="next-day">&gt;</button>
                    </div>
                    <p>${date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                </div>`;
        } else {
            const week = getCurrentWeek(date);
            const meso = getMesocycle(week);
            const workout = trainingData[dayType];
            const warmup = trainingData.warmups[dayType];

            let exercisesHTML = Object.entries(workout.exercises).map(([name, details]) => {
                const mesoDetails = details[meso.key];
                // Si por alguna razón un ejercicio no está definido para el meso actual, no lo mostramos
                if (!mesoDetails) return ''; 
                
                const numSets = parseInt(mesoDetails.series.split('-').pop());
                let setsHTML = '';

                for (let i = 0; i < numSets; i++) {
                    setsHTML += `
                    <div class="set-row">
                        <span class="set-number">${i + 1}</span>
                        <div class="input-group"><input type="number" placeholder="kg" data-exercise="${name}" data-set="${i}" data-field="weight"></div>
                        <div class="input-group"><input type="number" placeholder="reps" data-exercise="${name}" data-set="${i}" data-field="reps"></div>
                        <input type="checkbox" class="set-checkbox" data-exercise="${name}" data-set="${i}" data-field="done">
                    </div>`;
                }

                return `
                <div class="exercise-card">
                    <div class="exercise-card-header">
                        <h3 class="exercise-title" data-exercise="${name}">${name}</h3>
                        <span class="last-performance"></span>
                    </div>
                    <div class="sets-grid">${setsHTML}</div>
                    <button class="rest-timer-btn" data-time="90">Iniciar Descanso (90s)</button>
                </div>`;
            }).join('');

            workoutView.innerHTML = `
                <div class="workout-header">
                     <div class="date-navigation">
                        <button class="nav-arrow" id="prev-day">&lt;</button>
                        <div>
                            <h1>${workout.title}</h1>
                            <p>${meso.name} - Semana ${week}</p>
                            <p>${date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                        </div>
                        <button class="nav-arrow" id="next-day">&gt;</button>
                    </div>
                </div>
                <div class="warmup-card">
                    <h2>Calentamiento (RAMP)</h2>
                    <ul>${warmup.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
                <main class="exercise-list">${exercisesHTML}</main>`;
        }
        setupWorkoutListeners(date);
        loadWorkoutData(date);
    }

    function renderProgressView() {
        const progressView = document.getElementById('progress-view');
        const mainExercisesToTrack = [
            "Press de Banca en Máquina", "Press de Hombro en Máquina", 
            "Dominadas (o Jalón al Pecho)", "Remo en Máquina Horizontal Divergente",
            "Sentadilla Hack en Máquina", "Prensa de Piernas"
        ];

        let chartsHTML = '';
        mainExercisesToTrack.forEach(exercise => {
            const canvasId = `chart-${exercise.replace(/\s+/g, '-').toLowerCase()}`;
            chartsHTML += `<div class="chart-container"><canvas id="${canvasId}"></canvas></div>`;
        });
        
        progressView.innerHTML = `<h1>Progreso y Volumen</h1>` + (chartsHTML || `<p class="no-progress">Aún no hay datos de progreso. ¡Completa un entrenamiento para empezar!</p>`);
        
        const allData = getStoredData();
        let chartsCreated = 0;
        mainExercisesToTrack.forEach(exercise => {
            const canvasId = `chart-${exercise.replace(/\s+/g, '-').toLowerCase()}`;
            if (createChart(allData, exercise, canvasId, `Volumen de ${exercise}`)) {
                chartsCreated++;
            }
        });

        if (chartsCreated === 0) {
            progressView.innerHTML = `<h1>Progreso y Volumen</h1><p class="no-progress">Aún no hay datos de progreso. ¡Completa un entrenamiento para empezar!</p>`;
        }
    }

    function createChart(data, exerciseName, canvasId, chartLabel) {
        const chartData = { labels: [], datasets: [{ label: chartLabel, data: [], borderColor: 'rgba(187, 134, 252, 1)', backgroundColor: 'rgba(187, 134, 252, 0.2)', fill: true, tension: 0.1 }] };
        const sortedDates = Object.keys(data).sort();
        let hasData = false;

        sortedDates.forEach(date => {
            if (data[date][exerciseName]) {
                const volume = data[date][exerciseName].reduce((acc, set) => acc + ((set.weight || 0) * (set.reps || 0)), 0);
                if (volume > 0) {
                    chartData.labels.push(new Date(date).toLocaleDateString('es-ES', {day: '2-digit', month: 'short'}));
                    chartData.datasets[0].data.push(volume);
                    hasData = true;
                }
            }
        });

        if (!hasData) {
            const chartContainer = document.getElementById(canvasId)?.parentElement;
            if(chartContainer) chartContainer.style.display = 'none';
            return false;
        }

        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, { type: 'line', data: chartData });
        return true;
    }

    function setupViewListeners() {
        document.getElementById('nav-workout').addEventListener('click', () => switchView('workout-view'));
        document.getElementById('nav-progress').addEventListener('click', () => {
            switchView('progress-view');
            renderProgressView(); // Re-render charts every time view is switched
        });
    }
    
    function setupWorkoutListeners(date) {
        document.getElementById('prev-day')?.addEventListener('click', () => { currentDate.setDate(currentDate.getDate() - 1); renderWorkoutView(currentDate); });
        document.getElementById('next-day')?.addEventListener('click', () => { currentDate.setDate(currentDate.getDate() + 1); renderWorkoutView(currentDate); });
        document.querySelectorAll('.exercise-title').forEach(el => el.addEventListener('click', showExerciseModal));
        document.querySelectorAll('.rest-timer-btn').forEach(el => el.addEventListener('click', startRestTimer));
        document.querySelectorAll('.sets-grid input').forEach(el => el.addEventListener('change', handleInputChange));
    }

    function handleInputChange(e) {
        const { exercise, set, field } = e.target.dataset;
        const value = e.target.type === 'checkbox' ? e.target.checked : parseFloat(e.target.value);
        saveSetData(currentDate, exercise, parseInt(set), field, value);
    }
    
    function loadWorkoutData(date) {
        const data = getStoredData();
        const dateKey = getFormattedDate(date);
        if (!data[dateKey]) return;
        document.querySelectorAll('.sets-grid input').forEach(input => {
            const { exercise, set, field } = input.dataset;
            const setData = data[dateKey][exercise]?.[parseInt(set)];
            if (setData && setData[field] !== undefined) {
                if (input.type === 'checkbox') input.checked = setData[field];
                else input.value = setData[field];
            }
        });
    }

    function switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`nav-${viewId.split('-')[0]}`).classList.add('active');
    }

    function showExerciseModal(e) {
        const exerciseName = e.target.dataset.exercise;
        const exerciseInfo = trainingData.exerciseLibrary[exerciseName];
        
        document.getElementById('modal-exercise-title').textContent = exerciseName;
        const contentEl = document.getElementById('modal-exercise-content');

        if (exerciseInfo) {
            contentEl.innerHTML = `
                <p><strong>Técnica:</strong> ${exerciseInfo.description}</p>
                <div class="video-placeholder">
                    <p>Aquí iría un GIF o video del ejercicio.</p>
                </div>
            `;
        } else {
            contentEl.innerHTML = `<p>No se encontró información para este ejercicio.</p>`;
        }
        exerciseModal.style.display = 'block';
    }

    function startRestTimer(e) {
        const time = parseInt(e.target.dataset.time);
        let remaining = time;
        clearInterval(timerInterval);
        timerModal.style.display = 'block';
        const timerDisplay = document.getElementById('timer-display');
        timerDisplay.textContent = `01:30`; // Reset display
        
        timerInterval = setInterval(() => {
            remaining--;
            const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
            const seconds = String(remaining % 60).padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${seconds}`;
            if (remaining <= 0) {
                clearInterval(timerInterval);
                // Optional: play a sound
                timerModal.style.display = 'none';
            }
        }, 1000);
    }

    document.querySelector('#exercise-modal .close-btn').addEventListener('click', () => exerciseModal.style.display = 'none');
    document.getElementById('close-timer-btn').addEventListener('click', () => { clearInterval(timerInterval); timerModal.style.display = 'none'; });
    window.addEventListener('click', (e) => {
        if (e.target == exerciseModal) exerciseModal.style.display = 'none';
        if (e.target == timerModal) { clearInterval(timerInterval); timerModal.style.display = 'none'; }
    });

    renderApp();
});
