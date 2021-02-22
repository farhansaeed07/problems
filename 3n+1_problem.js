
let rawInputs = `605293 606510
956739 956006                                    
826611 825983
756134 756776
478642 479101
815892 815933
719220 719135
929349 929040
948351 948681
491808 491202                                      
504516 507852
604712 604712
436809 436182            
630804 630542
975948 975688
945718 945752
747700 747747
652581 653137
824003 823974
655077 655161
567537 567893
851101 851038
524621 524569
549210 549073
782205 782263
422252 422691
285142 285524
478472 479285
485461 484957
748121 748121
823874 824088
359661 358904
388654 388444
981428 981459
830977 832487
654572 654612
240125 241624
532347 536933
545105 545167
850670 851113
978562 976960
319662 322868
560495 559981
831101 831011
784445 782843
859271 859331
998394 998498
975465 975228
687538 680880
786313 786051
780568 780732
363174 361163
261481 261858
908012 909802
984442 984350
931890 931544
788836 791387
919454 919499
575642 575716
915504 916839
285788 285880
919365 918704
827554 827930
850429 850334
737959 737960
809210 810518
974713 974143
456486 455019
727712 727631
743706 745566
465147 463724
945152 944673
776248 775948
541191 542743
256518 255672
947523 950576
423648 421688
574485 575669
588113 587943
748123 748033
930036 929896
982165 982843
806280 806281
379341 379868
155281 158691
854261 855194
827665 827456
806029 805322
276791 280194
655238 655329
358577 358839
842747 844169
612687 612358
810273 809602
431700 431055
281758 283365
984263 984008
884741 885879
724852 724070
869222 869573`

let solutions = {}

const getCount = (n) => {
    let counter = 0;
    const i = n
    if(solutions[n]) {
        return solutions[n]
    }
    while (true) {
        counter++;
        if(n==1){
            solutions = { ...solutions, [i]:counter }
            return counter
        }
        n = n % 2 != 0 ? 3 * n + 1 : n / 2
    }
}

let results = []
for (let j = 0; j < inputs.length; j++) {
    let max = 0
    const [first, last] = inputs[j][0] > inputs[j][1] ? [inputs[j][1], inputs[j][0]] : [inputs[j][0], inputs[j][1]]
    for (let i = first; i <= last; i++) {
        const count = getCount(i)
        if( count > max ) {
            max = count
        }
    }
    results.push({input:`${first} ${last} ${last - first} == ${max} `})
}
console.log(results)
