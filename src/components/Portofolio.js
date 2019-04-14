import React from 'react';
import './Portofolio.css';


export default function Portofolio() {
    return (
        <div className="main-portofolio">
            <h1>PORTFOLIO</h1>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <div className="card to-do">
                            <div className="card-category">To-do List App</div>
                            <a className="card-link" href="https://github.com/razvanusc/to-do-react" target="_blank" ></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="card brewery">
                            <div className="card-category">Brewery</div>
                            <a className="card-link" href="https://github.com/razvanusc/brewery" target="_blank" ></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="card project-manager">
                            <div className="card-category">Project Manager Tool</div>
                            <a className="card-link" href="https://github.com/razvanusc/project-manager-tool" target="_blank" ></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="card submaster">
                            <div className="card-category">SubMaster</div>
                            <a className="card-link" href="https://github.com/razvanusc/SubMaster" target="_blank" ></a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="card b2boats">
                            <div className="card-category">B2Boats</div>
                            <a className="card-link" href="https://github.com/razvanusc/b2boats" target="_blank" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}