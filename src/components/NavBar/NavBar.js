// import { useAuth0 } from '@auth0/auth0-react';
// import { NavbarHead, Navigation, Links } from './NavBarStyles';
// import { useTranslation } from 'react-i18next';

// export const Navbar = () => {
//   const { isAuthenticated } = useAuth0();
//   const { t } = useTranslation();
//   return (
//     <>
//       {isAuthenticated ? (
//         <NavbarHead>
//           <Navigation>
//             <Links href="/" passHref>
//               {t('start')}
//             </Links>

//             <Links href="/setInsulinFactor" passHref>
//               {t('insulin')} <br />
//               {t('factor')}
//             </Links>

//             <Links href="/setCorrectionFactor" passHref>
//               {t('correction')} <br />
//               {t('factor')}
//             </Links>

//             <Links href="/savedInsulinData" passHref>
//               {t('data')}
//             </Links>
//           </Navigation>
//         </NavbarHead>
//       ) : null}
//     </>
//   );
// };

import { useAuth0 } from '@auth0/auth0-react';
import { NavbarHead, Navigation, Links } from './NavBarStyles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Verwende Link von react-router-dom

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { t } = useTranslation();
  return (
    <>
      {isAuthenticated ? (
        <NavbarHead>
          <Navigation>
            <Links as={Link} to="/" passHref>
              {t('start')}
            </Links>

            <Links as={Link} to="/insulinFactor" passHref>
              {t('insulin')} <br />
              {t('factor')}
            </Links>

            <Links as={Link} to="/correctionFactor" passHref>
              {t('correction')} <br />
              {t('factor')}
            </Links>

            <Links as={Link} to="/savedInsulinData" passHref>
              {t('data')}
            </Links>
          </Navigation>
        </NavbarHead>
      ) : null}
    </>
  );
};


// import { useAuth0 } from "@auth0/auth0-react";
// import { NavbarHead, Navigation, Links } from "./NavBarStyles";
// import { useTranslation } from "react-i18next";
// import { useHistory, useNavigate } from "react-router-dom"; // React Router Hook

// export const Navbar = () => {
//   const { isAuthenticated } = useAuth0();
//   const { t } = useTranslation();
//   // const navigate = useNavigate(); // React Router Navigation Hook

  
//   const history = useHistory();

//   const navigate = (path) => {
//     history.push(path);
//   };

//   return (
//     <>
//       {isAuthenticated ? (
//         <NavbarHead>
//           <Navigation>
//             <Links onClick={() => navigate('/home')}>
//               {t("start")}
//             </Links>

//             <Links onClick={() => navigate("/setInsulinFactor")}>
//               {t("insulin")} <br />
//               {t("factor")}
//             </Links>

//             <Links onClick={() => navigate("/setCorrectionFactor")}>
//               {t("correction")} <br />
//               {t("factor")}
//             </Links>

//             <Links onClick={() => navigate('/savedInsulinData')}>
//               {t("data")}
//             </Links>
//           </Navigation>
//         </NavbarHead>
//       ) : null}
//     </>
//   );
// };
