import React from 'react';
import './Landing.css'; 
import { useNavigate } from 'react-router-dom';


    
function Landing() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); 
      };

    const handleStartClick = () => {
        navigate('/signup'); 
      };

return (
    <div class="landing-page-re">
        <div class="div">
        <div class="overlap">
            {/* <img src="https://s3-alpha-sig.figma.com/img/4d2f/e72f/ed6e6abc8a9a49656c83c0270223ccdf?Expires=1698624000&Signature=G7dPDzjfIauS567UbK3WBjf2d9ASsXrI4kgnU4RMhDdzceiJWd0Jxe6YIJgIC5gsuDOJ7NW7eSghT9Hz-nOtInIiOgmr5z1PO6TOFT9Ma~LkFoRnMFl6MAKarHp81IgiJDCQhcpNsQz-DFIJoZxBUYB2oy03Cx8bvBG3jEhPbjxxtfR4ozBMUwNDFUOdTd-PUHc9NHaqv5xH5NyVMZtqj85Y0SO90J70LpVuEKE96IbGiF4hhAgcMs3E28e70TMjUTdNqPdLHG30Gg-HDww4BPK9dx1gm08AfrKLDITmvAczd9ZPMmCovrtMIpv9pSIQRn3FMOfm4vLwhLSweXHRpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Description of Image" /> */}
            
            <div>
            <p class="enhance-GEN-AI-s">
                Enhance GEN AI ‘s <br />
                reliability, affordability and efficiency <br />
            <button class="start-button-2" onClick={handleStartClick}>Get Started</button>
            </p>
            
            </div>

            <div class="frame">
                <p class="ai-model">
                    <span class="text-wrapper">AI M</span>
                     <span class="text-wrapper">odel</span>
                </p>

                <div class="group">
                <div class="overlap-group">
                    <div class="text-wrapper-2">340,000+</div>
                    <div class="text-wrapper-3">340,000+</div>
                </div>
                </div>
            </div>
            

        <div class="frame-2">
            <p class="GPU-cloud">
                <span class="text-wrapper">G</span> 
                <span class="text-wrapper">PU Cloud</span>
            </p>

            <div class="overlap-group-wrapper">
                <div class="overlap-group-2">
                    <p class="element-hr">
                        <span class="span">$0.99/H</span>
                         <span class="span">r</span>
                    </p>

                    <p class="hr">
                        <span class="text-wrapper-4">$0.99/H</span>
                        <span class="text-wrapper-4">r</span>
                    </p>
                </div>
            </div>
        </div>

        </div>
        <div class="navigation-bar">
                <div class="frame-3">
                    <div className="logo-with-company">
                        <div class="text-wrapper-5">Huup AI</div>
                    </div>
                <button className="button-container">
                        <div className="login-button" onClick={handleLoginClick}>Log in</div>    
                        <div className="start-button" onClick={handleStartClick}>Get Started</div>
                </button>
                </div>
            </div> 

        

        <footer class="footer">
            <div class="frame-4">
            <div class="frame-5">
                <div class="text-wrapper-7">©</div>
                <div class="text-wrapper-8">2023</div>
                <div class="text-wrapper-9">HuupAI. All rights reserved.</div>
            </div>
                <div class="text-wrapper-10">Contact@HuupAI.xyz</div>
            </div>
        </footer>


        <div class="frame-6">
            {/* <div className="box">
                <img className="ellipse" alt="Ellipse" />
            </div> */}
            <div class="div-wrapper">
                <div class="text-wrapper-11">Our partnership</div>
            </div>
            <img class="element" src="https://s3-alpha-sig.figma.com/img/401b/bdb9/ac435736f85456293a9976161e808092?Expires=1698624000&Signature=L~xfv4n~valL5gD4QGjYfGQEoFFHBXLrNU6JCJmuB9YlTnsO39ZhRMg-Ne1c2XIagiPjM8igjJiKaP8WsQh9lmbyMU4P5lOp9Z6BekNjeo6InLcUgDYCHRwQHb~vVpymyPVfgXCJXMg29OldtDHd4MutaJiQurnQteE7xb5C6oCAcGrBpT-z5Dg4Qb3mQtKeLwUWP81~XoN6GiVoSzSyZl7~lOavNGSLxZzNJ2a~ciTaHjjLwdXGh3AszVTny1Nb8WNa-Cl~9pzU-u4cADOtQouyErf5xvHU~3Cna9rDfxWBw4LRwvYDeLDc0jQVgO5pLpp1iGjm-7PYW0QbxNKsJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <img class="img" src="https://s3-alpha-sig.figma.com/img/f9cf/b393/c563945d468e5c507182177c964b9bd1?Expires=1698624000&Signature=kRs-6VOjaZ7h2yk0Atp9vpoEJOo4C77qcXgz0IOa02eHRgSz4OwX2H~KG4epYALHbnHtJ5WUXyE3xl5wj~~5lHEz6Eq8CtSZxJJUzuj55u2r5IlAVZ6fnMVG67glq9bJO~TFc5zNalKdpz~vqMabdCz0~4kS~Nhmv04awTzxA7J06lrrOZiN3YxogJDbKSLwed7bZEdmcGLljczz~UwdYLnYUofqO1Viy2f-AIBWsv9IU4O92rrLERC1psjlXSGVSiF-jBzFK~pzWUv34u8AGgcVwisOwZjnSFrkabSrcuQT~wSxLUbcO3O1UNn3s1mmgOP1tSHdVldwOQWUqkwISA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <img class="element-2" src="https://s3-alpha-sig.figma.com/img/4db3/54ab/b2db6d50dbb734e0b40444cf4d41f2cb?Expires=1698624000&Signature=LYs9IsUQ90A~JBgoNE1gPhyM6JCId~ndsg1d90LVi81AN-h~SDk-FFsyIKKwpwZdlUS7Me9buek0RjQDCB6JfuGmrRzM0INUAYk~rRoYgwDQNfOBz2oRDkCSDBpiYTaPVrfdIbMveuD4F1CloJWr16WeJhC1ymVPovyRjqTH73MyjQoHnWjwAs2BETOJswIGvdKblx8U58ASuMhVy1a1uWLyeCmdMbyafeLPyZHXxFr1XHM6aqKrvcpA9yZMuRnnZxkZccHYDE7CcpbOwVuvso820T6IT8v2wZmlza3xW7A5gcB7qr75w~T7xjj59uqZYQatfoVOquipl~AM4poXbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <img class="element-3" src="https://s3-alpha-sig.figma.com/img/8591/8562/4863a611ac36c84426a6a0d0a9868910?Expires=1698624000&Signature=JCK6KNL63JoN2GMEHfnZyTjBet5BtTZETh3FdO4J2CDkB2pk1NJ-xQ6o9GsLkWoBdtJtMjJ6YM9gSC7thKEzsZYHUzu1Gxs-x5-L~nPEaWQQ9q08RlZv~91XRghh-OMcD1Dqe~iLoeju~Q1qVGCAUZUlhGKoFJuzPrBBrtZQPwuqnglYCP2RoQN~1vAVpX2nwrcciMbVu1JBofu2oG8vqJRT3oNBTvgqj423jxXMnPPrSpYRsJOuM831crAXuU2rGB~iB8U3GcFlVT4WlADka-NI9Vk86QS4aQSkPee7Ro6z1TSvPyt0vbz4zbo06UHm9-N1Jnox7jrvUS09yyaqIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <img class="XMLID" src="images/XMLID_1_.png" />
            <img class="tencent-cloud-logo" src="images/tencent-cloud logo.png" />
            <img class="frame-7" src="images/Frame 9.png" />
            <img class="AI-logo" src="images/AI logo.png" />
        </div>

    </div>
</div>
);
};
    
export default Landing;    


