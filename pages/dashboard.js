import LearnLayout from '../page-layouts/LearnLayout';

export default () => (
    <LearnLayout name="Stella">
        <div className="container-fluid">
            <div className="row">
                <div id="header-box" className="col-12 stat-box">
                    <h3>Your Study Statistics</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 stat-box">
                    <h3>Cards per Study Level</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                                <th scope="col">4</th>
                                <th scope="col">5</th>
                                <th scope="col">6</th>
                                <th scope="col">7</th>
                                <th scope="col">8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>23</td>
                                <td>45</td>
                                <td>12</td>
                                <td>67</td>
                                <td>10</td>
                                <td>45</td>
                                <td>26</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-6 stat-box">
                    <h3>Most Missed Cards</h3>
                    <ul>
                        <li>Yeet</li>
                        <li>Blorp</li>
                        <li>Nope</li>
                    </ul>
                </div>
                <div className="col-6 stat-box">
                    <h3>Most Recent Cards</h3>
                    <ul>
                        <li>hella</li>
                        <li>litty</li>
                        <li>titty</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                #header-box {
                    height: 20vh;
                    text-align: start;
                }

                .stat-box {
                    text-align: center;
                    background-color: #eee;
                    border: 1px solid black;
                    border-radius: 10px;
                    margin-top: 20px;
                }
            `}</style>
        </div>
    </LearnLayout>
)