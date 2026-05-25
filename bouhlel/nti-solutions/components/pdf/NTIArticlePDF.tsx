import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Line,
  Svg,
} from "@react-pdf/renderer";

export interface PDFSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  note?: string;
}

export interface ArticlePDFData {
  title: string;
  subtitle?: string;
  tag?: string;
  sections: PDFSection[];
  date?: string;
}

const RED = "#D4820A";
const DARK = "#0C1F3D";
const GRAY = "#526272";
const LIGHT = "#F2F5F8";
const BORDER = "#DDE3EC";

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 50,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    fontSize: 10,
    color: DARK,
  },

  /* ─── Header ─── */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 28,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: RED,
    borderBottomStyle: "solid",
  },
  logoText: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    letterSpacing: -0.5,
  },
  logoSub: {
    fontSize: 7,
    color: GRAY,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  headerRight: {
    alignItems: "flex-end",
  },
  headerTag: {
    fontSize: 7,
    color: RED,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  headerDate: {
    fontSize: 8,
    color: GRAY,
  },

  /* ─── Title block ─── */
  titleBlock: {
    marginBottom: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    borderBottomStyle: "solid",
  },
  redLine: {
    width: 32,
    height: 2,
    backgroundColor: RED,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    letterSpacing: -0.8,
    lineHeight: 1.1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 11,
    color: GRAY,
    lineHeight: 1.55,
    maxWidth: "80%",
  },

  /* ─── Sections ─── */
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  paragraph: {
    fontSize: 10,
    color: GRAY,
    lineHeight: 1.65,
    marginBottom: 6,
  },

  /* ─── Bullets ─── */
  bulletList: {
    marginLeft: 0,
    marginBottom: 4,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  bulletDot: {
    width: 4,
    height: 4,
    backgroundColor: RED,
    marginTop: 3,
    marginRight: 8,
    flexShrink: 0,
  },
  bulletText: {
    fontSize: 10,
    color: GRAY,
    lineHeight: 1.5,
    flex: 1,
  },

  /* ─── Table ─── */
  table: {
    marginTop: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: BORDER,
    borderStyle: "solid",
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: DARK,
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: BORDER,
    borderTopStyle: "solid",
  },
  tableRowAlt: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: BORDER,
    borderTopStyle: "solid",
    backgroundColor: LIGHT,
  },
  tableHeaderCell: {
    flex: 1,
    padding: "6 10",
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#FFFFFF",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  tableCell: {
    flex: 1,
    padding: "5 10",
    fontSize: 9,
    color: GRAY,
  },
  tableCellFirst: {
    flex: 1,
    padding: "5 10",
    fontSize: 9,
    color: DARK,
    fontFamily: "Helvetica-Bold",
  },

  /* ─── Note ─── */
  note: {
    backgroundColor: LIGHT,
    borderLeftWidth: 3,
    borderLeftColor: RED,
    borderLeftStyle: "solid",
    padding: "8 12",
    marginTop: 8,
    marginBottom: 8,
  },
  noteText: {
    fontSize: 9,
    color: GRAY,
    lineHeight: 1.5,
    fontFamily: "Helvetica-Oblique",
  },

  /* ─── Footer ─── */
  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    borderTopStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 7.5,
    color: GRAY,
  },
  footerBrand: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: RED,
  },
  pageNumber: {
    fontSize: 7.5,
    color: GRAY,
  },

  /* ─── Contact card ─── */
  contactCard: {
    backgroundColor: DARK,
    padding: "14 16",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactGroup: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 7,
    color: RED,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  contactValue: {
    fontSize: 9,
    color: "#FFFFFF",
  },
});

function Divider() {
  return (
    <View style={{ marginVertical: 12 }}>
      <Svg height="1" width="495">
        <Line
          x1="0" y1="0"
          x2="495" y2="0"
          strokeWidth={1}
          stroke={BORDER}
        />
      </Svg>
    </View>
  );
}

interface Props {
  data: ArticlePDFData;
}

export function NTIArticlePDF({ data }: Props) {
  const today = new Date().toLocaleDateString("fr-TN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Document
      title={`NTI Solutions — ${data.title}`}
      author="NTI Solutions"
      subject={data.subtitle ?? data.title}
      creator="NTI Solutions — ntisolutions.com.tn"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header} fixed>
          <View>
            <Text style={styles.logoText}>NTI Solutions</Text>
            <Text style={styles.logoSub}>Sécurité & Sûreté — Tunisie</Text>
          </View>
          <View style={styles.headerRight}>
            {data.tag && <Text style={styles.headerTag}>{data.tag}</Text>}
            <Text style={styles.headerDate}>{data.date ?? today}</Text>
          </View>
        </View>

        {/* Title block */}
        <View style={styles.titleBlock}>
          <View style={styles.redLine} />
          <Text style={styles.title}>{data.title}</Text>
          {data.subtitle && (
            <Text style={styles.subtitle}>{data.subtitle}</Text>
          )}
        </View>

        {/* Sections */}
        {data.sections.map((section, si) => (
          <View key={si} style={styles.section} wrap={false}>
            {section.heading && (
              <Text style={styles.sectionHeading}>{section.heading}</Text>
            )}

            {section.paragraphs?.map((p, pi) => (
              <Text key={pi} style={styles.paragraph}>{p}</Text>
            ))}

            {section.bullets && section.bullets.length > 0 && (
              <View style={styles.bulletList}>
                {section.bullets.map((b, bi) => (
                  <View key={bi} style={styles.bulletItem}>
                    <View style={styles.bulletDot} />
                    <Text style={styles.bulletText}>{b}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.table && (
              <View style={styles.table}>
                <View style={styles.tableHeaderRow}>
                  {section.table.headers.map((h, hi) => (
                    <Text key={hi} style={styles.tableHeaderCell}>{h}</Text>
                  ))}
                </View>
                {section.table.rows.map((row, ri) => (
                  <View key={ri} style={ri % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
                    {row.map((cell, ci) => (
                      <Text
                        key={ci}
                        style={ci === 0 ? styles.tableCellFirst : styles.tableCell}
                      >
                        {cell}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            )}

            {section.note && (
              <View style={styles.note}>
                <Text style={styles.noteText}>{section.note}</Text>
              </View>
            )}

            {si < data.sections.length - 1 && <Divider />}
          </View>
        ))}

        {/* Contact card */}
        <View style={styles.contactCard}>
          <View style={styles.contactGroup}>
            <Text style={styles.contactLabel}>Téléphone</Text>
            <Text style={styles.contactValue}>+216 71 805 945</Text>
          </View>
          <View style={styles.contactGroup}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>contact@ntisolutions.com.tn</Text>
          </View>
          <View style={styles.contactGroup}>
            <Text style={styles.contactLabel}>Adresse</Text>
            <Text style={styles.contactValue}>
              3, Rue Ibrahim Cherif — 1003 Tunis
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerBrand}>NTI Solutions</Text>
          <Text style={styles.footerText}>
            3, Rue Ibrahim Cherif — Cité Olympique — 1003 Tunis · Tunisie
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
