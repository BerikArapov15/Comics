import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
// import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


const Footer = () => {

  return (
    <Box
      px={{ xs: 3, sm: 30 }}
      py={{ xs: 3, sm: 20 }}
      pb={{sm: 5}}
      bgcolor="#EEEFFB"
      color="rgb(15 14 15)"
    >
      <Container maxWidth="lg" height="24rem">
        <Grid container spacing={9}>
          <Grid item xs={4} sm={3} sx={{ mt: '0.6rem', my: '0.5rem' }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                // fontFamily: 'monospace',
              }}
            >
              Подписаться на рассылку
            </Box>
            <TextField id="filled-basic" label="E-mail" variant="filled"  />
            <Button variant="contained">Отправить</Button>
            

            {/* <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Contact Info
              </Link>
            </Box> */}
            <Box my={{ xs: 1, sm: 3 }}>
              <Link
                herf="/"
                // color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
                color="red"
              >
                Нажимая на кнопку , я соглашаюсь на обработку и хранение моих персональных данных
                 
              </Link>
              
            </Box>
            <InstagramIcon    />
            <FacebookIcon />
            <TwitterIcon />
            <EmailIcon/>
            <YouTubeIcon/>
            
          </Grid>
            

          <Grid item xs={6} sm={3} sx={{ mt: '0.5rem' }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'monospace',
              }}
            >
              Категории
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                СТАТЬИ И ПОДБОРКИ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                АВТОРЫ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                НОВЫМ АВТОРАМ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                СЕРИИ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                 АРХИВ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              ></Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} sx={{ mt: '0.6rem' }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'monospace',
              }}
            >
              О НАС
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', display: 'flex' }}
              >
                КОНТАКТЫ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', display: 'flex' }}
              >
               ГДЕ КУПИТЬ КНИГИ
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem', display: 'flex' }}
              >
                СЕРТИФИКАЦИЯ
              </Link>
              </Box>
            <Box my={{ xs: 1, sm: 2 }}>
            <img
                  style={{ marginRight: '20px' }}
                  src="data:image/jpeg;base64,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QuOq5Lj1JVnfndBfqsv+lYc2kjsvTT9/4urBm7M766S5GmNhIay/IeLvFxVug4nsjjYxtO4ljGtu5wA2AHS6zBFQ2okaSQdSurNg1JLGyNzfZZewBI3381oU3FWc+xBG31LnfmFG1HEiudyexn+GNv53VPRDUSn9SR4LQs2iHxuf3JU3U5trZLh9VJY9A7SP+NlEMncBpBIHgLgfBdaKovcdyt0dNDGLMYAPAALkHzPxQlcIoq9ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf/9k="
                  alt=""
                  width='130px'
                  heigth="30px"
                />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ mt: '0.6rem' }}>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'black',
                fontFamily: 'monospace',
              }}
            >
              Соц.Сети
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                <YouTubeIcon/> Комиксы
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                <TelegramIcon/> Комиксы для детей
                
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
              >
                <TelegramIcon/> АЗБУКА. КОМИКСЫ. МАНГА. ФАНТАСТИКА
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="text.secondary"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
              >
                <YouTubeIcon/> YOUTUBE: КОМИКСЫ. МАНГА
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              ></Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 1, sm: 6 }} pb={{ xs: 1, sm: 2 }}>
          &copy; © 2022 – 2022 ООО «Makers-Bootcamp»
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;