import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { height } from "@mui/system";

function Copyright() {
  return <></>;
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={1}
                  >
                    Издательская Группа «Азбука-Аттикус»
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: "auto", verticalAlign: "middle" }}
                    >
                      В Издательскую Группу «Азбука-Аттикус» входят четыре
                      издательства. Каждое специализируется на определенных
                      нишах книжного рынка и стремится достичь совершенства
                      именно в них: «Азбука» — русская и зарубежная классика,
                      современная художественная литература, фэнтези и
                      фантастика, культурология, искусство, книги для детей,
                      комиксы и манга. «Иностранка» — эталонная переводная проза
                      и беллетристика. «КоЛибри» — биографии, мемуары,
                      исторические монографии, кулинария, психология, бизнес,
                      творчество. «Махаон» — книги для детей всех возрастных
                      категорий: от первых стихов и сказок до Гарри Поттера, а
                      также красочные атласы и энциклопедии знаний.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80%", height: "80%" }}
                    image="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435"
                    alt="Сomic"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 0,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "80%", m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "70%", heigth: "60%" }}
                    image="https://images.unsplash.com/photo-1630348637620-3d0584aa148f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbWljJTIwYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
                    alt="Shop"
                    ml={8}
                  />
                </Grid>

                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    sx={{ align: "center" }}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    ml={5}
                  >
                    Издательство «Азбука»
                    <Typography variant="h5" color="text.secondary" paragraph>
                      «Азбука-классика» — уникальная серия, ставшая за более чем
                      25 лет своей истории символом издательства: две с
                      половиной тысячи избранных книг общим тиражом свыше 30
                      миллионов экземпляров. Издательство «Азбука» —
                      произведения Сергея Довлатова, Виктории Токаревой, Орхана
                      Памука, Дафны Дюморье, Милорада Павича, Милана Кундеры,
                      Донато Карризи, Тома Хэнкса, Мэттью Макконахи, Марии
                      Семёновой, Робин Хобб, Роберта Джордана, Жана-Кристофа
                      Гранже, Ю Несбё. «Детская» «Азбука» прочно ассоциируется с
                      «Муми-троллями», «Медвежонком Паддингтоном» и «Как
                      приручить дракона». Любители комиксов с нетерпением ждут
                      от «Азбуки» эксклюзивных релизов графических романов от DC
                      Comics и Vertigo и новых манга-сериалов, претендующих на
                      популярность наряду с «Токийским гулем», Death Note,
                      «Атакой на Титанов», Naruto. Издательство «Азбука» —
                      впечатляющий спектр признанных бестселлеров от «Волкодава»
                      и «Ходячего замка» до «Бэтмена» и «Шантарама»!
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={1}
                  >
                    Издательство «Иностранка»
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: "auto", verticalAlign: "middle" }}
                    >
                      «Иностранка» — качественные издания литературных
                      произведений таких мировых знаменитостей, как Дж.К.
                      Роулинг, Джоджо Мойес, Джулиан Барнс, Сесилия Ахерн, Марк
                      Леви, Кобо Абэ, Дэвид Митчелл, Майкл Шейбон, Ирвин Уэлш,
                      Джеральд Даррелл, Роальд Даль, Юкио Мисима, Роберт
                      Гэлбрейт, Антония Байетт. Фирменный стиль издательства —
                      внимание к деталям: прекрасные переводы в лучших традициях
                      отечественной школы, деликатная редактура, выверенный
                      дизайн, достойное полиграфическое исполнение.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80%", height: "80%" }}
                    image="https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
                    alt="Сomic"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 0,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "80%", m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: "70%", heigth: "60%" }}
                    image="https://media.istockphoto.com/photos/adult-male-rubythroated-hummingbird-archilochus-colubris-isolated-on-picture-id1352726567?k=20&m=1352726567&s=612x612&w=0&h=7SLXoPQBcAPMcALlPfPk75TWSOG2c_u4LcEiVLX5rOE="
                    alt="Shop"
                    ml={8}
                  />
                </Grid>

                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    sx={{ align: "center" }}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    ml={5}
                  >
                    Издательство «КоЛибри»
                    <Typography variant="h5" color="text.secondary" paragraph>
                      Издательство «Не читайте историю — читайте биографии,
                      потому что это — жизнь без теории» — при выборе книг для
                      публикации мы последовательно руководствуемся этой
                      рекомендацией великого Дизраэли. Черчилль, Фрейд,
                      Макиавелли, Шекспир, Чехов, Дягилев, Ницше, Дмитрий
                      Лихачёв, Оскар Уайльд, Чарли Чаплин, Коко Шанель, Альберт
                      Эйнштейн, Альфред Нобель – на их именах, идеях и деяниях
                      базируется не только история человечества, но и наша
                      издательская программа. Ярчайшие личности выдающихся
                      современников — блестящих кулинаров, кутюрье, актеров,
                      журналистов, мыслителей — находят отражение в их
                      книгах-откровениях, содержащих не только бриллианты
                      мудрости и остроумия, но и бесценные практические советы.
                      Книги Гордона Рамзи, Оза Кларка, Йотама Оттоленги, Рене
                      Редзепи, Алёны Долецкой, Аркадия Ипполитова, Евгения
                      Гришковца, Энтони Бивора, Лоуренса Риса, Александра
                      Ширвиндта, Теренса Конрана, Нассима Талеба учат
                      «властвовать собой» и радоваться жизни.
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={1}
                  >
                    Издательство «Махаон»
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: "auto", verticalAlign: "middle" }}
                    >
                      Книги для детей и подростков Мы стремимся издавать книги,
                      которые становятся любимыми, пробуждают богатую гамму
                      эмоций и помогают познавать мир. От первых стихов до
                      захватывающего фэнтези, от начальных развивающих пособий
                      до красочных подробных атласов и всеобъемлющих
                      энциклопедий. Гарри Поттер и Карлсон, Буратино и Пеппи
                      Длинныйчулок, Незнайка и Железный Дровосек — давние
                      знакомцы и надежные друзья — никогда не надоедают, радуют,
                      учат думать и идут вместе с ребенком по жизни.
                      Издательство уделяет огромное внимание качеству и внешнему
                      виду книг. Иллюстрации и обложки к ним создают
                      профессиональные художники, а печатаются они на бумаге
                      высокого качества в лучших типографиях нашей страны и за
                      рубежом.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80%", height: "80%" }}
                    image="https://media.istockphoto.com/photos/butterfly-papilio-machaon-on-blue-flowers-picture-id184404067?b=1&k=20&m=184404067&s=170667a&w=0&h=RHoSbX-Spa4fNVLlCc3SoHB9wRPA3L-qCaCrO_vZzhI="
                    alt="Сomic"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "10.25%",
                    }}
                    image="https://media.istockphoto.com/photos/building-in-shape-of-smiling-emoji-blinking-with-tongue-out-in-the-picture-id1313673729?b=1&k=20&m=1313673729&s=170667a&w=0&h=aBpn5bulde_vDXtxvStasOPjXrk2FN951R6q3jXBRmo="
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Comics
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}
