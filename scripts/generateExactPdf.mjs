import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

async function buildExactPdf() {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);

  // Load system fonts with full Polish UTF-8 support
  const fontRegularBytes = fs.readFileSync('/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf');
  const fontBoldBytes = fs.readFileSync('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf');
  const fontItalicBytes = fs.readFileSync('/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf');

  const regularFont = await doc.embedFont(fontRegularBytes);
  const boldFont = await doc.embedFont(fontBoldBytes);
  const italicFont = await doc.embedFont(fontItalicBytes);

  const A4_WIDTH = 595.28;
  const A4_HEIGHT = 841.89;

  // Helper to wrap text into multiple lines
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(candidate, size);
      if (width <= maxWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // Draw Logo "HiT FiT"
  function drawHitFitLogo(page, x, y, size = 26) {
    const hitWidth = boldFont.widthOfTextAtSize('HiT ', size);
    page.drawText('HiT ', {
      x,
      y,
      size,
      font: boldFont,
      color: rgb(0.85, 0.15, 0.15), // Red
    });
    page.drawText('FiT', {
      x: x + hitWidth,
      y,
      size,
      font: boldFont,
      color: rgb(0.0, 0.60, 0.28), // Green
    });
  }

  // Draw simple decorative botanical corner curves
  function drawCornerFloral(page, cx, cy, angle, scale, color) {
    // Elegant decorative laurel/leaf flourish
    const rad = (angle * Math.PI) / 180;
    for (let i = 0; i < 5; i++) {
      const offset = (i - 2) * 12;
      page.drawCircle({
        x: cx + Math.cos(rad) * offset * scale,
        y: cy + Math.sin(rad) * offset * scale,
        size: 3 * scale,
        color: color,
      });
    }
  }

  // ==========================================
  // PAGE 1: Intro & Obiad
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    let y = 740;
    const margin = 65;
    const maxWidth = A4_WIDTH - margin * 2;

    page.drawText('Drodzy Goście,', {
      x: margin,
      y,
      size: 18,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 30;

    const introPara = [
      'Dołożymy wszelkich starań pod względem jakości,',
      'staranności, dobrych produktów, oprawy stołu i miłej',
      'fachowej obsługi, aby Wasze przyjęcie było',
      'niezapomnianą, smaczną uroczystością.',
    ];
    for (const line of introPara) {
      page.drawText(line, {
        x: margin,
        y,
        size: 13,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 19;
    }
    y -= 15;

    // "w HiT FiT i Piwnicy pod Żabą"
    const lineY = y;
    const textW = 'w ';
    page.drawText(textW, {
      x: margin + 30,
      y: lineY,
      size: 17,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    let curX = margin + 30 + boldFont.widthOfTextAtSize(textW, 17);

    page.drawText('HiT ', {
      x: curX,
      y: lineY,
      size: 17,
      font: boldFont,
      color: rgb(0.85, 0.15, 0.15), // Red
    });
    curX += boldFont.widthOfTextAtSize('HiT ', 17);

    page.drawText('FiT ', {
      x: curX,
      y: lineY,
      size: 17,
      font: boldFont,
      color: rgb(0.0, 0.65, 0.3), // Green
    });
    curX += boldFont.widthOfTextAtSize('FiT ', 17);

    page.drawText('i ', {
      x: curX,
      y: lineY,
      size: 17,
      font: regularFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    curX += regularFont.widthOfTextAtSize('i ', 17);

    page.drawText('Piwnicy pod Żabą', {
      x: curX,
      y: lineY,
      size: 17,
      font: boldFont,
      color: rgb(0.42, 0.70, 0.15), // Lime green
    });

    y -= 35;

    const welcome2 = [
      'Zapraszamy do zapoznania się z bogata ofertą, którą możecie Państwo',
      'dopasować do swoich oczekiwań.',
    ];
    for (const line of welcome2) {
      page.drawText(line, {
        x: margin,
        y,
        size: 11,
        font: boldFont,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= 16;
    }
    y -= 14;

    const obiadText = 'Obiad: Rosół z makaronem, krem z pomidorów, krem chrzanowy z chipsem boczkowym, żurek z jajkiem, cappuccino pieczarkowe, krem z pieczonego buraka, krem z białych warzyw z migdałami prażonymi, krem dwu smakowy.';
    const obiadLines = wrapText(obiadText, regularFont, 10.5, maxWidth);
    for (let i = 0; i < obiadLines.length; i++) {
      page.drawText(obiadLines[i], {
        x: margin,
        y,
        size: 10.5,
        font: i === 0 ? boldFont : regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 10;

    const schabText = 'Kotlet schabowy, schab na zielono, schabowy -królewski, schabowy z camembertem i żurawiną szwajcar, schab po cygańsku, karczek zapiekany z warzywami i serem, stek z cebulką ,rolada wieprzowa w sosie , sztuka mięsa w sosie ( karczek), rolada schabowa z grzybami pieczona';
    const schabLines = wrapText(schabText, regularFont, 10.5, maxWidth);
    for (const line of schabLines) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 10;

    const drobText = 'kotlet drobiowy de volay, filet po hawajsku, filet po parysku, drobiowy w serowej panierce, roladka drobiowa ze szpinakiem, udko pieczone,, udko faszerowane pieczarkami, rolada z serem i papryką,';
    const drobLines = wrapText(drobText, regularFont, 10.5, maxWidth);
    for (const line of drobLines) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 8;

    page.drawText('3-4 rodz. mięs do wyboru', {
      x: margin,
      y,
      size: 10.5,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 22;

    const ziemText = 'Ziemniaki puree, ziemniaki pieczone ,kluski śląskie, kopytka, frytki, krokiety ziemniaczane do wyboru 2 rodz.';
    const ziemLines = wrapText(ziemText, regularFont, 10.5, maxWidth);
    for (const line of ziemLines) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 10;

    const surowkaText = 'Buraczki , buraczki zasmażane, marchewka z jabłkiem, marchewka z sezamem z pomarańczami, kapusta biała, coleslaw, kapusta kiszona,kapusta czerwona, kapusta czerwona na gorąco, kapusta pekińska z pomidorami, sałatka z ogórków na ostro, seler z orzechami i rodzynkami, marchewka z groszkiem , por';
    const surowkaLines = wrapText(surowkaText, regularFont, 10.5, maxWidth);
    for (const line of surowkaLines) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
  }

  // ==========================================
  // PAGE 2: Surówki c.d. & Przekąski
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    let y = 760;
    const margin = 65;
    const maxWidth = A4_WIDTH - margin * 2;

    page.drawText('z jabłkiem, por z ananasem, mizeria, mix sałat z sosem winegret - do wyboru 3 surówki', {
      x: margin,
      y,
      size: 10.5,
      font: regularFont,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 26;

    page.drawText('Przekąski:', {
      x: margin,
      y,
      size: 11,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 20;

    const sections = [
      'mięsa pieczone ( schab ze śliwka , karczek faszerowany, sztufada z szynki\\nabijana słoniną )boczek faszerowany, rolada drobiowa z krewetkami, rolada schabowa z grzybami, pasztet podany z żurawina .',
      'wędliny i sery podane razem na dużych półmiskach',
      'sałatka jarzynowa, żydowska, brokułowa 2 rodz. tuńczykowa warstwowa, gyros, grecka, nicejska, sałatka z kurczakiem z prażonym słonecznikiem , cezar , makaronowa z szynka smażoną, sałatka z wędzonym kurczakiem ,sałatka tabule z miętą, sałatka z pieczarkami marynowanymi i jajkami, sałatka z surimi szuba/sałatka śledziowa sałatki na zielono z kiełkami i pestkami, serami, owocami .',
      'Carpaccio z pieczonego buraka z serem feta i orzechami',
      'tymbaliki drobiowe, galaretka wieprzowa',
      'szynki faszerowane pastą pieczarkowo-jajeczną, pieczarki faszerowane mięsem podane na gorąco z ostrą salsą meksykańską, pieczarki faszerowane panierowane',
      'jajka faszerowane lub jajka w sosie tatarskim, tortille faszerowane, rożki z tortilli',
      'placuszki ogrodowe z musem serowym z łososiem lub warzywami',
      'rolady :serowa ,marchewkowa , szpinakowa',
      'przekładaniec serowy z pikantnym musem i kurczakiem',
      '-Pikle, pomidory podane z sosem czosnkowym i serem, sałatka wiosenna w świeżych ogórkach',
      'Śledź w sosie Carry, śledź po japońsku, śledź na ostro, tradycyjny, korzenny , śledź po kaszubsku. , ryba po grecku,',
    ];

    for (const sec of sections) {
      const lines = wrapText(sec, regularFont, 10.5, maxWidth);
      for (const line of lines) {
        page.drawText(line, {
          x: margin,
          y,
          size: 10.5,
          font: regularFont,
          color: rgb(0.15, 0.15, 0.15),
        });
        y -= 15;
      }
      y -= 7;
    }

    y -= 5;
    page.drawText('Gorące kolacje :', {
      x: margin,
      y,
      size: 11,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
  }

  // ==========================================
  // PAGE 3: Gorące kolacje & Droższe propozycje
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    let y = 760;
    const margin = 65;
    const maxWidth = A4_WIDTH - margin * 2;

    const dinners = [
      '1) krokiet z barszczem, ( krokiet ser -pieczarki, kapusta -grzyby, )',
      '2) Paszteciki mięsne (drożdżowe) z barszczem',
      '3) zupa gulaszowa, cygańska',
      '4) flaczki',
      '5)szaszłyki pieczone',
      '6) bigos staropolski',
      '7) biała kiełbasa w ciemnym piwie',
      '8) żeberka w whisky',
      '9) gołąbki',
      '10) nuggets z dipami',
      '11) udka drobiowe pieczone z warzywami( z ziemniakami lub batatami, brukselka lub fasola szparagowa, pomidory cherry, papryka)',
      '12)pizza',
      '13) hamburgery',
      '14) pieróg drożdżowy faszerowany podany z sosem tzatziki lub barszczem',
    ];

    for (const d of dinners) {
      const lines = wrapText(d, regularFont, 10.5, maxWidth);
      for (const line of lines) {
        page.drawText(line, {
          x: margin,
          y,
          size: 10.5,
          font: regularFont,
          color: rgb(0.15, 0.15, 0.15),
        });
        y -= 15;
      }
      y -= 4;
    }

    y -= 10;
    page.drawText('Droższe propozycje', {
      x: margin,
      y,
      size: 11.5,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 20;

    const expensiveObiad = 'Do obiadu :Roladki wołowe w sosie, łódeczki drobiowe faszerowane serami i suszonymi pomidorami, schab zapiekany z mozzarella, polędwiczki w sosie pieprzowym, polędwiczki w sosie kurkowym , roladka drobiowa w szynce parmeńskiej faszerowana szparagom';
    const linesEO = wrapText(expensiveObiad, regularFont, 10.5, maxWidth);
    for (const line of linesEO) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 8;

    page.drawText('łosoś z pieca oprószony migdałami', {
      x: margin,
      y,
      size: 10.5,
      font: regularFont,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 20;

    const vegText = 'sezonowo warzywa na gorąco w sosie holenderskim , szparagi ,fasolka szparagowa, kalafior, brokuł';
    const linesVeg = wrapText(vegText, regularFont, 10.5, maxWidth);
    for (const line of linesVeg) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 12;

    page.drawText('Przekąski:', {
      x: margin,
      y,
      size: 11,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 18;

    page.drawText('vol a venty faszerowane,', {
      x: margin,
      y,
      size: 10.5,
      font: regularFont,
      color: rgb(0.15, 0.15, 0.15),
    });
  }

  // ==========================================
  // PAGE 4: Desery, Wiejski Stół & Warunki
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    let y = 760;
    const margin = 65;
    const maxWidth = A4_WIDTH - margin * 2;

    const p4Items = [
      'Łosoś w grillowanej cukinii',
      'Carpaccio wołowe na rukoli, carpaccio z łososia podane na pomidorach z grzankami',
      'Dorsz z sosem słodko ostrym',
      'Sałatka ze świeżym szpinakiem ,gorgonzolą , gruszką z sosem malinowym',
      'Polędwica faszerowana orzechami podana z sosem z mango,',
    ];
    for (const item of p4Items) {
      const lines = wrapText(item, regularFont, 10.5, maxWidth);
      for (const line of lines) {
        page.drawText(line, {
          x: margin,
          y,
          size: 10.5,
          font: regularFont,
          color: rgb(0.15, 0.15, 0.15),
        });
        y -= 15;
      }
      y -= 5;
    }

    y -= 8;
    page.drawText('Gorące kolacje :', {
      x: margin,
      y,
      size: 11,
      font: boldFont,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 20;

    const hotDinners = [
      'Udziec płonący podany z kapusta zasmażana i pieczonymi ziemniakami',
      'Grill: karczek, pierś, kiełbaski, szaszłyki, sałatki 2 rodz. –',
      'Delikatny strogonow z polędwicy wieprzowej podany z bagietkami, tagliatelle z polędwiczkami i sosem z zielonego pieprzu, strogonow wołowy ,tagliatelle z kurczakiem i warzywami .',
    ];
    for (const hd of hotDinners) {
      const lines = wrapText(hd, regularFont, 10.5, maxWidth);
      for (const line of lines) {
        page.drawText(line, {
          x: margin,
          y,
          size: 10.5,
          font: regularFont,
          color: rgb(0.15, 0.15, 0.15),
        });
        y -= 15;
      }
      y -= 6;
    }

    y -= 8;
    const wiejski = 'Wiejski stół przy minimum 40 osobach ( swojskie wędliny, pieczone mięsa , ogórki kiszone, smalec, chleb ).';
    const linesW = wrapText(wiejski, regularFont, 10.5, maxWidth);
    for (const line of linesW) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 12;

    const ciasta = 'Możliwość zamówienia ciasta: sernik, szarlotka, orzechowiec, zielony mech, Rafaelo i inne, również podania na ciepło z lodami, deserki';
    const linesC = wrapText(ciasta, regularFont, 10.5, maxWidth);
    for (const line of linesC) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
    y -= 12;

    page.drawText('Alkohol *powyżej 18 % można przynieść swój bez opłat „ korkowego”', {
      x: margin,
      y,
      size: 10.5,
      font: italicFont,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 22;

    page.drawText('W zamian musimy kupić 10 szt. Coca coli 1l w lokalu.', {
      x: margin,
      y,
      size: 10.5,
      font: regularFont,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 22;

    page.drawText('Wino i piwo również do zakupu w lokalu .', {
      x: margin,
      y,
      size: 10.5,
      font: regularFont,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 22;

    const napojeW = 'Do każdego zamówienia napoje kawa, herbata, woda i soki bez ograniczeń trwania przyjęcia.';
    const linesNW = wrapText(napojeW, regularFont, 10.5, maxWidth);
    for (const line of linesNW) {
      page.drawText(line, {
        x: margin,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= 15;
    }
  }

  // ==========================================
  // PAGE 5: OFERTA MENU NA PRZYJĘCIE (PROPOZYCJA NR 2)
  // Decorated with red rose theme & HiT FiT logo
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);

    // Draw decorative border frame
    page.drawRectangle({
      x: 35,
      y: 35,
      width: A4_WIDTH - 70,
      height: A4_HEIGHT - 70,
      borderWidth: 0.5,
      borderColor: rgb(0.85, 0.70, 0.70),
      color: rgb(0.995, 0.985, 0.985),
    });

    // Top Right HiT FiT logo
    drawHitFitLogo(page, A4_WIDTH - 165, 750, 28);

    // Title centered
    const title = 'OFERTA MENU NA PRZYJĘCIE';
    const titleSize = 20;
    const titleW = boldFont.widthOfTextAtSize(title, titleSize);
    page.drawText(title, {
      x: (A4_WIDTH - titleW) / 2,
      y: 690,
      size: titleSize,
      font: boldFont,
      color: rgb(0.80, 0.25, 0.20), // Crimson/terracotta
    });

    const sub = 'PROPOZYCJA NR 2';
    const subSize = 12;
    const subW = boldFont.widthOfTextAtSize(sub, subSize);
    page.drawText(sub, {
      x: (A4_WIDTH - subW) / 2,
      y: 665,
      size: subSize,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2),
    });

    // Dania główne
    let y = 615;
    const drawCentered = (text, font, size, color, gap = 16) => {
      const w = font.widthOfTextAtSize(text, size);
      page.drawText(text, {
        x: (A4_WIDTH - w) / 2,
        y,
        size,
        font,
        color,
      });
      y -= gap;
    };

    drawCentered('Dania główne:', boldFont, 13, rgb(0.1, 0.1, 0.1), 22);
    drawCentered('Rolada drobiowa faszerowana szparagami', regularFont, 12, rgb(0.2, 0.2, 0.2), 17);
    drawCentered('podana z puree z zielonego groszku i sałatka caprese', regularFont, 12, rgb(0.2, 0.2, 0.2), 35);

    drawCentered('Zimne przekąski:', boldFont, 13, rgb(0.1, 0.1, 0.1), 20);
    drawCentered('wędliny , sery i tortille', regularFont, 11.5, rgb(0.2, 0.2, 0.2), 17);
    drawCentered('grzanki z tatarem z łososia', regularFont, 11.5, rgb(0.2, 0.2, 0.2), 17);
    drawCentered('sałatka gyros,', regularFont, 11.5, rgb(0.2, 0.2, 0.2), 17);
    drawCentered('jajka w sosie tatarskim', regularFont, 11.5, rgb(0.2, 0.2, 0.2), 35);

    drawCentered('Napoje:', boldFont, 13, rgb(0.1, 0.1, 0.1), 20);
    drawCentered('Napoje zimne: woda i soki', regularFont, 11.5, rgb(0.2, 0.2, 0.2), 17);
    drawCentered('Napoje gorące: kawa i herbata', regularFont, 11.5, rgb(0.2, 0.2, 0.2), 45);

    // Footer note
    drawCentered('Menu może zostać dostosowane do indywidualnych', italicFont, 9.5, rgb(0.2, 0.2, 0.2), 14);
    drawCentered('potrzeb oraz liczby zaproszonych gości.', italicFont, 9.5, rgb(0.2, 0.2, 0.2), 14);
    drawCentered('Istnieje możliwość uzupełnienia oferty o ciasta', italicFont, 9.5, rgb(0.2, 0.2, 0.2), 14);
    drawCentered('oraz dodatkowe danie gorące.', italicFont, 9.5, rgb(0.2, 0.2, 0.2), 0);
  }

  // ==========================================
  // PAGE 6: OFERTA MENU NA PRZYJĘCIE (PROPOZYCJA NR 3)
  // Decorated with Sunflower theme & HiT FiT logo
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);

    page.drawRectangle({
      x: 35,
      y: 35,
      width: A4_WIDTH - 70,
      height: A4_HEIGHT - 70,
      borderWidth: 0.5,
      borderColor: rgb(0.90, 0.82, 0.55),
      color: rgb(0.998, 0.995, 0.985),
    });

    // Top Left HiT FiT logo
    drawHitFitLogo(page, 55, 750, 28);

    // Title centered
    const title = 'OFERTA MENU NA PRZYJĘCIE';
    const titleSize = 20;
    const titleW = boldFont.widthOfTextAtSize(title, titleSize);
    page.drawText(title, {
      x: (A4_WIDTH - titleW) / 2,
      y: 700,
      size: titleSize,
      font: boldFont,
      color: rgb(0.85, 0.55, 0.15), // Warm golden
    });

    const sub = 'PROPOZYCJA NR 3';
    const subSize = 12;
    const subW = boldFont.widthOfTextAtSize(sub, subSize);
    page.drawText(sub, {
      x: (A4_WIDTH - subW) / 2,
      y: 675,
      size: subSize,
      font: boldFont,
      color: rgb(0.2, 0.2, 0.2),
    });

    let y = 635;
    const drawCentered = (text, font, size, color, gap = 16) => {
      const w = font.widthOfTextAtSize(text, size);
      page.drawText(text, {
        x: (A4_WIDTH - w) / 2,
        y,
        size,
        font,
        color,
      });
      y -= gap;
    };

    drawCentered('Dania główne:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Szwajcar, schabowy ,de volay', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Dodatki:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Krokiety ziemniaczane ,ziemniaki', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Surówki:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Warzywa w sosie holenderskim, czerwona kapusta z jabłkiem', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Zimne przekąski:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Mięso pieczone podane z ćwikłą', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Tortille podpiekane podane z kurczakiem, warzywami i sosem tzatziki', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Sałatka na zielono z serami, kiełkami i sosem brzoskwiniowym,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Placuszki ogrodowe z warzywami,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Sałatka brokułowa z sosem czosnkowym', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Napoje:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Napoje zimne: woda i soki', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Napoje gorące: kawa i herbata', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Alkohol: wino i piwo dostępne do zamówienia w lokalu.', regularFont, 11, rgb(0.2, 0.2, 0.2), 34);

    drawCentered('Menu może zostać dostosowane do indywidualnych', italicFont, 9, rgb(0.2, 0.2, 0.2), 13);
    drawCentered('potrzeb oraz liczby zaproszonych gości.', italicFont, 9, rgb(0.2, 0.2, 0.2), 13);
    drawCentered('Istnieje możliwość uzupełnienia oferty o ciasta', italicFont, 9, rgb(0.2, 0.2, 0.2), 13);
    drawCentered('oraz dodatkowe danie gorące.', italicFont, 9, rgb(0.2, 0.2, 0.2), 0);
  }

  // ==========================================
  // PAGE 7: OFERTA MENU NA CHRZCINY
  // Decorated with eucalyptus / delicate blue floral theme
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);

    page.drawRectangle({
      x: 35,
      y: 35,
      width: A4_WIDTH - 70,
      height: A4_HEIGHT - 70,
      borderWidth: 0.5,
      borderColor: rgb(0.70, 0.80, 0.90),
      color: rgb(0.985, 0.99, 1.0),
    });

    let y = 740;
    const drawCentered = (text, font, size, color, gap = 16) => {
      const w = font.widthOfTextAtSize(text, size);
      page.drawText(text, {
        x: (A4_WIDTH - w) / 2,
        y,
        size,
        font,
        color,
      });
      y -= gap;
    };

    drawCentered('OFERTA MENU', boldFont, 22, rgb(0.28, 0.44, 0.60), 26);
    drawCentered('NA CHRZCINY', boldFont, 22, rgb(0.28, 0.44, 0.60), 40);

    drawCentered('Zupa: Rosół z makaronem', boldFont, 13, rgb(0.1, 0.1, 0.1), 32);

    drawCentered('Dania główne:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Kotlet schabowy, rolada drobiowa ze szpinakiem,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('rolada z pieczarkami w sosie, nugetsy', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Dodatki:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Ziemniaki, kluski śląskie, frytki', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Surówki:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Młoda kapusta, seler z orzechami, mizeria', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Zimne przekąski:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Polędwiczki faszerowane „po warszawsku”,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Sałatka Fit z granatem,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('„Przekładaniec” koronkowo serowy z kurczakiem,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Sałatka i kebaczety', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Napoje:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Napoje zimne: woda i soki', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Napoje gorące: kawa i herbata', regularFont, 11, rgb(0.2, 0.2, 0.2), 34);

    drawCentered('Menu może zostać dostosowane do indywidualnych potrzeb oraz liczby zaproszonych gości.', italicFont, 9, rgb(0.2, 0.2, 0.2), 14);
    drawCentered('Istnieje możliwość uzupełnienia oferty o ciasta oraz dodatkowe danie gorące.', italicFont, 9, rgb(0.2, 0.2, 0.2), 0);
  }

  // ==========================================
  // PAGE 8: OFERTA MENU NA PRZYJĘCIE (PROPOZYCJA NR 1)
  // Decorated with tropical botanical theme & HiT FiT logo
  // ==========================================
  {
    const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);

    page.drawRectangle({
      x: 35,
      y: 35,
      width: A4_WIDTH - 70,
      height: A4_HEIGHT - 70,
      borderWidth: 0.5,
      borderColor: rgb(0.85, 0.70, 0.75),
      color: rgb(0.998, 0.985, 0.99),
    });

    // Top Right HiT FiT logo
    drawHitFitLogo(page, A4_WIDTH - 165, 750, 28);

    // Title centered
    const title = 'OFERTA MENU NA PRZYJĘCIE';
    const titleSize = 20;
    const titleW = boldFont.widthOfTextAtSize(title, titleSize);
    page.drawText(title, {
      x: (A4_WIDTH - titleW) / 2,
      y: 700,
      size: titleSize,
      font: boldFont,
      color: rgb(0.80, 0.25, 0.40), // Raspberry/magenta
    });

    const sub = 'PROPOZYCJA NR 1';
    const subSize = 12;
    const subW = boldFont.widthOfTextAtSize(sub, subSize);
    page.drawText(sub, {
      x: (A4_WIDTH - subW) / 2,
      y: 675,
      size: subSize,
      font: boldFont,
      color: rgb(0.90, 0.45, 0.15), // Orange accent
    });

    let y = 635;
    const drawCentered = (text, font, size, color, gap = 16) => {
      const w = font.widthOfTextAtSize(text, size);
      page.drawText(text, {
        x: (A4_WIDTH - w) / 2,
        y,
        size,
        font,
        color,
      });
      y -= gap;
    };

    drawCentered('Dania główne:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Schabowy z camembertem i żurawiną ,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('drobiowy w serowej panierce, karczek w sosie', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Dodatki:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Ziemniaki, kluski śląskie', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Surówki:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('mix sałat z winegretem , surówka colesław, buraczki', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Zimne przekąski:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('mięso pieczone (schab ze śliwką, karczek),', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('półmisek rozmaitości typu finger food,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('galaretki drobiowe,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('sałatka cezar,', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('pieczarki faszerowane panierowane', regularFont, 11, rgb(0.2, 0.2, 0.2), 26);

    drawCentered('Napoje:', boldFont, 12.5, rgb(0.1, 0.1, 0.1), 18);
    drawCentered('Napoje zimne: woda i soki', regularFont, 11, rgb(0.2, 0.2, 0.2), 16);
    drawCentered('Napoje gorące: kawa i herbata', regularFont, 11, rgb(0.2, 0.2, 0.2), 34);

    drawCentered('Menu może zostać dostosowane do indywidualnych', italicFont, 9, rgb(0.2, 0.2, 0.2), 13);
    drawCentered('potrzeb oraz liczby zaproszonych gości.', italicFont, 9, rgb(0.2, 0.2, 0.2), 13);
    drawCentered('Istnieje możliwość uzupełnienia oferty o ciasta', italicFont, 9, rgb(0.2, 0.2, 0.2), 13);
    drawCentered('oraz dodatkowe danie gorące.', italicFont, 9, rgb(0.2, 0.2, 0.2), 0);
  }

  // Save the PDF
  const pdfBytes = await doc.save();
  const outputPath = path.resolve('public/menu-hitfit-piwnica.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Generated exact 8-page PDF at: ${outputPath} (${pdfBytes.length} bytes)`);
}

buildExactPdf().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
