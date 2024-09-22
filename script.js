* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: url('background.png') no-repeat center fixed;
    background-size: cover;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow-x: hidden;
    animation: pulse 5s infinite;
}

@keyframes pulse {
    0% { background-position: 0 0; }
    50% { background-position: 0 50%; }
    100% { background-position: 0 0; }
}

.container {
    max-width: 1200px;
    width: 90%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.header {
    text-align: center;
    margin-bottom: 40px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.pagination button {
    padding: 15px 30px;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin: 0 10px;
    border: 2px solid #ffffff;
    border-radius: 25px;
    font-weight: bold;
}

.pagination button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
}

.pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.bottom-pagination {
    justify-content: center;
}

.search-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.search-form {
    display: flex;
    align-items: center;
}

.filter-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.filter-container select, .filter-container button {
    margin-bottom: 10px;
    padding: 10px 20px;
    border: 2px solid #ffffff;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.filter-container select:focus, .filter-container button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.card {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('pokemon-base.jpg');
    background-size: cover;
    filter: brightness(70%) saturate(150%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('pokemon-evolved.jpg');
    background-size: cover;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card h3 {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.2);
}

.card:hover::before {
    opacity: 1;
}

.card:hover::after {
    opacity: 0;
}

.card:hover h3 {
    transform: translateY(-10px);
}

.card.type-grass { background-color: rgba(119, 206, 125, 0.2); }
.card.type-fire { background-color: rgba(234, 205, 184, 0.2); }
.card.type-water { background-color: rgba(131, 165, 245, 0.2); }
.card.type-electric { background-color: rgba(248, 211, 48, 0.2); }
.card.type-normal { background-color: rgba(17, 96, 141, 0.2); }
.card.type-fighting { background-color: rgba(23, 123, 246, 0.2); }
.card.type-ground { background-color: rgba(178, 148, 36, 0.2); }
.card.type-rock { background-color: rgba(0, 239, 103, 67, 0.2); }
.card.type-bug { background-color: rgba(76, 194, 168, 0.2); }
.card.type-ghost { background-color: rgba(41, 160, 150, 0.2); }
.card.type-steel { background-color: rgba(106, 172, 25, 0.2); }

.footer {
    text-align: center;
    margin-top: 40px;
}

.background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
    );
    background-size: 200% 200%;
    animation: move 10s infinite linear;
}

@keyframes move {
    0% { background-position: 0 0; }
    100% { background-position: 100% 100%; }
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

@media (max-width: 768px) {
    .cards-container {
        grid-template-columns: 1fr;
    }
}
