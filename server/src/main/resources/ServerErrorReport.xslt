<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:mine="http://www.iatsoftware.net" 
                version="2.0"
                exclude-result-prefixes="xs mine">

    <xsl:output method="xml" omit-xml-declaration="yes" encoding="UTF-8"
                indent="yes" />

    <xsl:variable name="paragraphStyle">
        <StyleElem>
            <ElemName>font-family</ElemName>
            <ElemValue>Arial, Helvetica, sans-serif</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>font-size</ElemName>
            <ElemValue>1em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>color</ElemName>
            <ElemValue>#000</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-left</ElemName>
            <ElemValue>2em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-right</ElemName>
            <ElemValue>2em</ElemValue>
        </StyleElem>
    </xsl:variable>

    <xsl:variable name="exceptionMessageStyle">
        <StyleElem>
            <ElemName>font-family</ElemName>
            <ElemValue>Arial, Helvetica, sans-serif</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>font-size</ElemName>
            <ElemValue>1em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>color</ElemName>
            <ElemValue>#000</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-left</ElemName>
            <ElemValue>1em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-right</ElemName>
            <ElemValue>2em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-top</ElemName>
            <ElemValue>.25em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-bottom</ElemName>
            <ElemValue>0</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>line-height</ElemName>
            <ElemValue>1.1em</ElemValue>
        </StyleElem>
    </xsl:variable>

    <xsl:variable name="stackTraceStyle">
        <StyleElem>
            <ElemName>font-family</ElemName>
            <ElemValue>Arial, Helvetica, sans-serif</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>font-size</ElemName>
            <ElemValue>1em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>color</ElemName>
            <ElemValue>#000</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-left</ElemName>
            <ElemValue>2em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-right</ElemName>
            <ElemValue>2em</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-top</ElemName>
            <ElemValue>0</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>margin-bottom</ElemName>
            <ElemValue>0</ElemValue>
        </StyleElem>
        <StyleElem>
            <ElemName>line-height</ElemName>
            <ElemValue>1.1em</ElemValue>
        </StyleElem>
    </xsl:variable>

    <xsl:function name="mine:closeInTag">
        <xsl:param name="tagName" />
        <xsl:param name="text" />
        <xsl:value-of select="concat('&#x3c;', $tagName, '&#x3e;', $text, '&#x3c;/', $tagName, '&#x3e;')" />
    </xsl:function>


    <xsl:variable name="root" select="/" />

    <xsl:template match="ServerErrorReport">
        <xsl:element name="html">
            <xsl:element name="head">
                <xsl:value-of select="'&#x0A;'" />
            </xsl:element>
            <xsl:element name="body">
                <xsl:call-template name="WriteParagraph">
                    <xsl:with-param name="textNode" select="concat('A user with the email address &quot;', EMail, '&quot; encountered the following error at ', Timestamp)" />
                    <xsl:with-param name="indent" select="'no'" />
                </xsl:call-template>
                <xsl:call-template name="WriteException">
                    <xsl:with-param name="message" select="//Exception/Message" />
                    <xsl:with-param name="stackTrace" select="//Exception/StackTrace" />
                </xsl:call-template>
                <xsl:for-each select="//InnerException">
                    <xsl:call-template name="WriteException">
                        <xsl:with-param name="message" select="Message" />
                        <xsl:with-param name="stackTrace" select="StackTrace" />
                    </xsl:call-template>
                </xsl:for-each>
            </xsl:element>
        </xsl:element>
    </xsl:template>

    <xsl:template name="WriteException">
        <xsl:param name="message" />
        <xsl:param name="stackTrace" />
        <xsl:element name="p">
            <xsl:attribute name="style" select="for $s in $exceptionMessageStyle/StyleElem return concat($s/ElemName, ': ', $s/ElemValue, ';')" />
            <xsl:value-of select="$message" />
        </xsl:element>
        <xsl:for-each select="$stackTrace">
            <xsl:element name="p">
                <xsl:attribute name="style" select="for $s in $stackTraceStyle/StyleElem return concat($s/ElemName, ': ', $s/ElemValue, ';')" />
                <xsl:value-of select="concat(., ' (', @Line, ')')" />
            </xsl:element>
        </xsl:for-each>
    </xsl:template>

    <xsl:template name="WriteParagraph">
        <xsl:param name="textNode" />
        <xsl:param name="indent" />
        <xsl:variable name="text">
            <xsl:value-of disable-output-escaping="yes" select="$textNode" />
        </xsl:variable>
        <xsl:element name="p">
            <xsl:variable name="styleAttr">
                <xsl:variable name="styleRules">
                    <xsl:for-each select="$paragraphStyle/StyleElem">
                        <xsl:element name="StyleRule">
                            <xsl:value-of select="concat(ElemName, ': ', ElemValue, ';')" />
                        </xsl:element>
                    </xsl:for-each>
                </xsl:variable>
                <xsl:value-of select="string-join($styleRules/StyleRule, ' ')" />
            </xsl:variable>
            <xsl:attribute name="style" select="$styleAttr" />
            <xsl:value-of disable-output-escaping="yes" select="$text" />
        </xsl:element>  
    </xsl:template>
</xsl:stylesheet>