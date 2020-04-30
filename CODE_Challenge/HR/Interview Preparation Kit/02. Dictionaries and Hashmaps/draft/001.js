Stop POINT =  3
------------->   subS=a  |  compS=bba  |  subLen=1
subS=a  |  nextS=b  |
subS=a  |  nextS=b  |
subS=a  |  nextS=a  |  ---YES---
------------->   subS=b  |  compS=ba  |  subLen=1
subS=b  |  nextS=b  |  ---YES---
subS=b  |  nextS=a  |
------------->   subS=b  |  compS=a  |  subLen=1
subS=b  |  nextS=a  |
.................................
------------->   subS=ab  |  compS=bba  |  subLen=2
subS=ab  |  nextS=bb  |  subS[y]=a  |  charId=-1
subS=ab  |  nextS=ba  |  subS[y]=a  |  charId=1
subS=ab  |  nextS=b  |  subS[y]=b  |  charId=0
--- YES ---
------------->   subS=bb  |  compS=ba  |  subLen=2
subS=bb  |  nextS=ba  |  subS[y]=b  |  charId=0
subS=bb  |  nextS=a  |  subS[y]=b  |  charId=-1
.................................
------------->   subS=abb  |  compS=bba  |  subLen=3
subS=abb  |  nextS=bba  |  subS[y]=a  |  charId=2
subS=abb  |  nextS=bb  |  subS[y]=b  |  charId=0
subS=abb  |  nextS=b  |  subS[y]=b  |  charId=0
--- YES ---
.................................
=====================================================================
Stop POINT =  3
------------->   subS=a  |  compS=bcd  |  subLen=1
subS=a  |  nextS=b  |
subS=a  |  nextS=c  |
subS=a  |  nextS=d  |
------------->   subS=b  |  compS=cd  |  subLen=1
subS=b  |  nextS=c  |
subS=b  |  nextS=d  |
------------->   subS=c  |  compS=d  |  subLen=1
subS=c  |  nextS=d  |
.................................
------------->   subS=ab  |  compS=bcd  |  subLen=2
subS=ab  |  nextS=bc  |  subS[y]=a  |  charId=-1
subS=ab  |  nextS=cd  |  subS[y]=a  |  charId=-1
------------->   subS=bc  |  compS=cd  |  subLen=2
subS=bc  |  nextS=cd  |  subS[y]=b  |  charId=-1
.................................
------------->   subS=abc  |  compS=bcd  |  subLen=3
subS=abc  |  nextS=bcd  |  subS[y]=a  |  charId=-1
