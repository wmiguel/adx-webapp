import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <header>
                <h1>Dashboard</h1>
            </header>
            <div id="dashboard">
                <section>
                    <i class="bi bi-clipboard"></i>
                    <div>
                        <p>166</p>
                        <h2>Work Orders</h2>
                    </div>
                </section>
                
                <section>
                    <i class="bi bi-file-earmark-music"></i>
                    <div>
                        <p>3</p>
                        <h2>On Demand</h2>
                    </div>
                </section>
                
                <section>
                    <i class="bi bi-person"></i>
                    <div>
                        <p>5</p>
                        <h2>Adminstration</h2>
                    </div>
                </section>
            </div>
        `;
    }
}