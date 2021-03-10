import React from 'react';

function Dashboard() {
    return(
        <React.Fragment>
            <header>
                <h1>Dashboard</h1>
            </header>
            <div id="dashboard">
                <section>
                    <i className="bi bi-clipboard"></i>
                    <div>
                        <p>166</p>
                        <h2>Work Orders</h2>
                    </div>
                </section>
                <section>
                    <i className="bi bi-file-earmark-music"></i>
                    <div>
                        <p>3</p>
                        <h2>On Demand</h2>
                    </div>
                </section>
                <section>
                    <i className="bi bi-person"></i>
                    <div>
                        <p>5</p>
                        <h2>Adminstration</h2>
                    </div>
                </section>
            </div>
        </React.Fragment>)
};

export default Dashboard;