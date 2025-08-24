document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS Y CONFIGURACIÓN ---
    const trainingData = {
        warmups: {
            day1: [
                "<strong>Cardio Ligero:</strong> 5 min",
                "<strong>Activación:</strong> Rotaciones hombro (2x15), Bird-dog (2x10/lado), Plancha (30s)",
                "<strong>Movilidad:</strong> Círculos brazos, Rotaciones torso",
            ],
            day2: [
                "<strong>Cardio Ligero:</strong> 5 min",
                "<strong>Activación:</strong> Band pull-aparts (2x15), Remo banda (2x15), Puente glúteo (2x15)",
                "<strong>Movilidad:</strong> Dislocaciones hombro con banda, Elevaciones escapulares",
            ],
            day3: [
                "<strong>Cardio Ligero:</strong> 5 min",
                "<strong>Activación:</strong> Puente glúteo (2x15), Patadas glúteo (2x15/lado), Sentadilla goblet ligera (2x10)",
                "<strong>Movilidad:</strong> Balanceos pierna, Círculos cadera",
            ]
        },
        day1: { /* ... datos de ejercicios ... */ },
        day2: { /* ... datos de ejercicios ... */ },
        day3: { /* ... datos de ejercicios ... */ },
        // (Los datos de los ejercicios se omiten aquí por brevedad, pero son los mismos que antes)
    };
    // Copiando los datos de ejercicios del script anterior
    trainingData.day1 = { title: "Día 1: Pecho, Hombros y Tríceps", exercises: { "Press de Banca en Máquina": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Press Inclinado en Máquina": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "1-2" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Fondos en Paralelas": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "1-2" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Press de Hombro en Máquina": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Elevaciones Laterales con Mancuernas": { meso1: { series: "4", reps: "10-15", rir: "1-2" }, meso2: { series: "4", reps: "10-15", rir: "1-2" }, descarga: { series: "2", reps: "12-15", rir: "3-4" }, meso3: { series: "4", reps: "10-15", rir: "0-2" }, }, "Máquina de Press de Tríceps Sentado": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "1-2" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Extensiones de Tríceps en Polea con Cuerda": { meso1: { series: "3", reps: "12-15", rir: "1-2" }, meso2: { series: "3", reps: "12-15", rir: "1-2" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "12-15", rir: "0-2" }, }, } };
    trainingData.day2 = { title: "Día 2: Espalda, Hombros y Bíceps", exercises: { "Dominadas (o Jalón al Pecho)": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Remo en Máquina Horizontal Divergente": { meso1: { series: "3", reps: "6-10", rir: "1-2" }, meso2: { series: "3", reps: "6-8", rir: "0-1" }, descarga: { series: "1-2", reps: "8-10", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Remo Sentado en Banco con Polea Baja": { meso1: { series: "3", reps: "10-12", rir: "1-2", agarre: "Agarre Neutro" }, meso2: { series: "3", reps: "8-10", rir: "0-1", agarre: "Agarre Prono" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4", agarre: "Agarre Cómodo" }, meso3: { series: "3", reps: "10-12", rir: "0-2", agarre: "Agarre Neutro o Supino" }, }, "Vuelos Posteriores en Máquina": { meso1: { series: "4", reps: "12-15", rir: "1-2" }, meso2: { series: "4", reps: "12-15", rir: "1-2" }, descarga: { series: "2", reps: "12-15", rir: "3-4" }, meso3: { series: "4", reps: "12-15", rir: "0-2" }, }, "Encogimientos con Mancuernas": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "10-15", rir: "1-2" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" }, }, "Curl de Bíceps en Máquina": { meso1: { series: "3", reps: "8-12", rir: "1-2" }, meso2: { series: "3", reps: "6-10", rir: "0-1" }, descarga: { series: "1-2", reps: "10-12", rir: "3-4" }, meso3: { series: "3", reps: "8-12", rir: "0-2" }, }, "Curl Martillo con Mancuernas": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "10-15", rir: "1-2" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" }, }, } };
    trainingData.day3 = { title: "Día 3: Piernas y Abdominales", exercises: { "Sentadilla Hack en Máquina": { meso1: { series: "4", reps: "8-12", rir: "1-2" }, meso2: { series: "4", reps: "6-10", rir: "0-1" }, descarga: { series: "2", reps: "10-12", rir: "3-4" }, meso3: { series: "4", reps: "8-12", rir: "0-2" }, }, "Prensa de Piernas": { meso1: { series: "4", reps: "8-15", rir: "1-2" }, meso2: { series: "4", reps: "8-12", rir: "0-1" }, descarga: { series: "2", reps: "10-15", rir: "3-4" }, meso3: { series: "4", reps: "10-15", rir: "0-2" }, }, "Curl Femoral": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "6-10", rir: "0-1" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" }, }, "Sentadilla Goblet con Mancuerna": { meso1: { series: "3-4", reps: "8-15", rir: "1-2" }, meso2: { series: "3-4", reps: "6-10", rir: "0-1" }, descarga: { series: "2", reps: "10-12", rir: "3-4" }, meso3: { series: "3-4", reps: "8-12", rir: "0-2" }, }, "Extensiones de Cuádriceps": { meso1: { series: "3", reps: "12-20", rir: "1-2" }, meso2: { series: "3", reps: "12-20", rir: "1-2" }, descarga: { series: "1-2", reps: "15-20", rir: "3-4" }, meso3: { series: "3", reps: "12-20", rir: "0-2" }, }, "Hip Thrust en Máquina": { meso1: { series: "3", reps: "10-15", rir: "1-2" }, meso2: { series: "3", reps: "8-12", rir: "0-1" }, descarga: { series: "1-2", reps: "12-15", rir: "3-4" }, meso3: { series: "3", reps: "10-15", rir: "0-2" }, }, "Elevación de Talones": { meso1: { series: "4", reps: "10-20", rir: "1-2" }, meso2: { series: "4", reps: "10-20", rir: "1-2" }, descarga: { series: "2", reps: "15-20", rir: "3-4" }, meso3: { series: "4", reps: "10-20", rir: "0-2" }, }, "Abdominales (Crunch en Máquina)": { meso1: { series: "3-4", reps: "12-15", rir: "1-2" }, meso2: { series: "3-4", reps: "10-15", rir: "0-1" }, descarga: { series: "2", reps: "15-20", rir: "2-3" }, meso3: { series: "3-4", reps: "12-15", rir: "0-1" }, }, } };
    const trainingCalendar = { "2025-08-07": "day1", "2025-08-08": "day2", "2025-08-09": "descanso", "2025-08-10": "day3", "2025-08-11": "descanso", "2025-08-12": "day1", "2025-08-13": "day2", "2025-08-14": "day3", "2025-08-15": "descanso", "2025-08-16": "day1", "2025-08-17": "day2", "2025-08-18": "day3", "2025-08-19": "descanso", "2025-08-20": "day1", "2025-08-21": "day2", "2025-08-22": "day3", "2025-08-23": "descanso", "2025-08-24": "day1", "2025-08-25": "day2", "2025-08-26": "day3", "2025-08-27": "descanso", "2025-08-28": "day1", "2025-08-29": "day2", "2025-08-30": "day3", "2025-08-31": "descanso", "2025-09-01": "day1", "2025-09-02": "day2", "2025-09-03": "day3", "2025-09-04": "descanso", "2025-09-05": "day1", "2025-09-06": "day2", "2025-09-07": "day3", "2025-09-08": "descanso", "2025-09-09": "day1", "2025-09-10": "day2", "2025-09-11": "day3", "2025-09-12": "descanso", "2025-09-13": "day1", "2025-09-14": "day2", "2025-09-15": "day3", "2025-09-16": "descanso", "2025-09-17": "day1", "2025-09-18": "day2", "2025-09-19": "day3", "2025-09-20": "descanso", "2025-09-21": "day1", "2025-09-22": "day2", "2025-09-23": "day3", "2025-09-24": "descanso", "2025-09-25": "day1", "2025-09-26": "day2", "2025-09-27": "day3", "2025-09-28": "descanso", "2025-09-29": "day1", "2025-09-30": "day2", "2025-10-01": "day3", "2025-10-02": "descanso", "2025-10-03": "day1", "2025-10-04": "day2", "2025-10-05": "day3", "2025-10-06": "descanso", "2025-10-07": "day1", "2025-10-08": "day2", "2025-10-09": "day3", "2025-10-10": "descanso", "2025-10-11": "day1", "2025-10-12": "day2", "2025-10-13": "day3", "2025-10-14": "descanso", "2025-10-15": "day1", "2025-10-16": "day2", "2025-10-17": "day3", "2025-10-18": "descanso", "2025-10-19": "day1", "2025-10-20": "day2", "2025-10-21": "day3", "2025-10-22": "descanso", "2025-10-23": "day1", "2025-10-24": "day2", "2025-10-25": "day3", "2025-10-26": "descanso", "2025-10-27": "day1", "2025-10-28": "day2", "2025-10-29": "day3", "2025-10-30": "descanso", "2025-10-31": "day1", "2025-11-01": "day2", "2025-11-02": "day3", "2025-11-03": "descanso", "2025-11-04": "day1", "2025-11-05": "day2",};
    const startDate = new Date('2025-08-07T00:00:00');
    let currentDate = new Date();
    let timerInterval;

    // --- ELEMENTOS DEL DOM ---
    const appContainer = document.getElementById('app');
    const exerciseModal = document.getElementById('exercise-modal');
    const timerModal = document.getElementById('timer-modal');

    // --- LÓGICA DE DATOS (LocalStorage) ---
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

    // --- LÓGICA DE FECHAS Y MESOCICLOS ---
    const getFormattedDate = (date) => date.toISOString().split('T')[0];
    
    function getCurrentWeek(date) {
        const diffTime = Math.max(0, date - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        return Math.min(13, Math.max(1, Math.ceil(diffDays / 7)));
    }

    function getMesocycle(week) {
        if (week <= 4) return { key: 'meso1', name: 'Mesociclo 1: Acumulación' };
        if (week <= 8) return { key: 'meso2', name: 'Mesociclo 2: Intensificación' };
        if (week === 9) return { key: 'descarga', name: 'Semana de Descarga' };
        if (week <= 13) return { key: 'meso3', name: 'Mesociclo 3: Realización' };
        return { key: 'none', name: 'Fuera del plan' };
    }

    // --- LÓGICA DE RENDERIZADO ---
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
        progressView.innerHTML = `
            <h1>Progreso y Volumen</h1>
            <div class="chart-container">
                <canvas id="volume-chart-press"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="volume-chart-hack"></canvas>
            </div>`;
        
        const allData = getStoredData();
        createChart(allData, 'Press de Banca en Máquina', 'volume-chart-press', 'Volumen de Press de Banca');
        createChart(allData, 'Sentadilla Hack en Máquina', 'volume-chart-hack', 'Volumen de Sentadilla Hack');
    }

    function createChart(data, exerciseName, canvasId, chartLabel) {
        const chartData = { labels: [], datasets: [{ label: chartLabel, data: [], borderColor: 'rgba(187, 134, 252, 1)', backgroundColor: 'rgba(187, 134, 252, 0.2)', fill: true }] };
        const sortedDates = Object.keys(data).sort();

        sortedDates.forEach(date => {
            if (data[date][exerciseName]) {
                const volume = data[date][exerciseName].reduce((acc, set) => {
                    return acc + ( (set.weight || 0) * (set.reps || 0) );
                }, 0);
                if (volume > 0) {
                    chartData.labels.push(date);
                    chartData.datasets[0].data.push(volume);
                }
            }
        });

        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, { type: 'line', data: chartData });
    }

    // --- LÓGICA DE EVENTOS ---
    function setupViewListeners() {
        document.getElementById('nav-workout').addEventListener('click', () => switchView('workout-view'));
        document.getElementById('nav-progress').addEventListener('click', () => switchView('progress-view'));
    }
    
    function setupWorkoutListeners(date) {
        document.getElementById('prev-day')?.addEventListener('click', () => {
            currentDate.setDate(currentDate.getDate() - 1);
            renderWorkoutView(currentDate);
        });
        document.getElementById('next-day')?.addEventListener('click', () => {
            currentDate.setDate(currentDate.getDate() + 1);
            renderWorkoutView(currentDate);
        });
        
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

    // --- MODALES Y TEMPORIZADOR ---
    function showExerciseModal(e) {
        const exerciseName = e.target.dataset.exercise;
        document.getElementById('modal-exercise-title').textContent = exerciseName;
        exerciseModal.style.display = 'block';
    }

    function startRestTimer(e) {
        const time = parseInt(e.target.dataset.time);
        let remaining = time;
        clearInterval(timerInterval);

        timerModal.style.display = 'block';
        const timerDisplay = document.getElementById('timer-display');
        
        timerInterval = setInterval(() => {
            remaining--;
            const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
            const seconds = String(remaining % 60).padStart(2, '0');
            timerDisplay.textContent = `${minutes}:${seconds}`;
            if (remaining <= 0) {
                clearInterval(timerInterval);
                // Opcional: reproducir un sonido
            }
        }, 1000);
    }

    // Eventos para cerrar modales
    document.querySelector('#exercise-modal .close-btn').addEventListener('click', () => exerciseModal.style.display = 'none');
    document.getElementById('close-timer-btn').addEventListener('click', () => {
        clearInterval(timerInterval);
        timerModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target == exerciseModal) exerciseModal.style.display = 'none';
        if (e.target == timerModal) {
            clearInterval(timerInterval);
            timerModal.style.display = 'none';
        }
    });

    // --- INICIALIZACIÓN ---
    renderApp();
});
