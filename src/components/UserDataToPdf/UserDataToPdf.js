import React from 'react';
import { pdf, Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { ExportButton, Styles } from './UserDataToPdfStyles';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

export default function UserDataToPdf({ cardData }) {
  const { user } = useAuth0();
  const userCardData = cardData.filter((cardData) => {
    return cardData.userMail === user.email;
  });
  const { t } = useTranslation();

  async function exportToPDF() {
    const itemsPerPage = 1000;
    const itemsPerRow = 10;

    const docChunks = [];
    for (let i = 0; i < userCardData.length; i += itemsPerPage) {
      const chunk = userCardData.slice(i, i + itemsPerPage);

      const chunkRows = [];
      for (let j = 0; j < chunk.length; j += itemsPerRow) {
        chunkRows.push(chunk.slice(j, j + itemsPerRow));
      }
      docChunks.push(chunkRows);
    }

    const blobPromises = docChunks.map(async (chunkRows, chunkIndex) => {
      const doc = (
        <Document key={chunkIndex}>
          {chunkRows.map((row, rowIndex) => (
            <Page key={rowIndex} size="A4" style={Styles.page}>
              <View style={Styles.header}>
                <Text style={Styles.title}>
                  {t('saveddatafrom')} {user.name}
                </Text>
                <Text style={Styles.subtitle}>
                  {t('createdon')}: {new Date().toLocaleString()}
                </Text>
              </View>
              <View style={Styles.cardContainer}>
                {row.map((item, itemIndex) => (
                  <View key={itemIndex} style={Styles.card}>
                    <Text style={{ color: '#008080' }}>
                      {t('date')}: {item.date}
                    </Text>
                    <Text style={{ color: '#c92a2a' }}>
                      {t('bloodsugarlevel')}: {item.bloodsugar} mg/dl
                    </Text>
                    <Text style={{ color: '#e67700' }}>
                      {t('carbohydrates')}: {item.carbohydrates} g
                    </Text>
                    <Text style={{ color: '#5c940d' }}>
                      {t('usedinsulin')}: {item.insulin}
                    </Text>
                    <Text style={{ color: '#2b8a3e' }}>
                      {t('insulinfactor')}: {item.daytimeFactor}
                    </Text>
                    <Text style={{ color: '#2b8a3e' }}>
                      {t('correctionfactor')}: {item.correctionFactor}
                    </Text>
                    <Text style={{ color: '#364fc7' }}>
                      {t('injectedinsulin')} {t('quantity')}:{' '}
                      {item.calculateUnit}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={Styles.footer}>
                {' '}
                <Text>InsulinApp.vercel.app</Text>
              </View>
              <Image style={Styles.image} src="logo.png" alt="" />
              <Text
                style={Styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
                fixed
              />
            </Page>
          ))}
        </Document>
      );

      const blob = await pdf(doc).toBlob();
      return blob;
    });

    const blobs = await Promise.all(blobPromises);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const pdfDoc = new Blob(blobs, { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfDoc);
    const link = document.createElement('a');
    if (isIOS) {
      window.open(url);
    } else {
      window.open(url);
      link.href = url;
      link.download = `gespeicherte_daten_${user.name}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    }
  }
  return <ExportButton onClick={exportToPDF}>{t('export')}</ExportButton>;
}
