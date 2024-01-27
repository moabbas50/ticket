import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

products = [
      {
        id: '1',
        code: 'c-101',
        name: 'أحمد محمود',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/1.png',
        price: "$40",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '2',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/3.png',
        price: "$40",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '3',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/2.png',
        price: "$45",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id:'4',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/4.png',
        price: "$54",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '5',
        code: 'c-101',
        name: 'أحمد محمود',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/1.png',
        price: "$40",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '6',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/3.png',
        price: "$30",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '7',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/2.png',
        price: "$45",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id:'8',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/4.png',
        price: "$54",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '9',
        code: 'c-101',
        name: 'أحمد محمود',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/1.png',
        price: "$40",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '10',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/3.png',
        price: "$30",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '11',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/2.png',
        price: "$45",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id:'12',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/4.png',
        price: "$54",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '13',
        code: 'c-101',
        name: 'أحمد محمود',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/1.png',
        price: "$40",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '14',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/3.png',
        price: "$30",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '15',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/2.png',
        price: "$45",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id:'16',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/4.png',
        price: "$54",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '17',
        code: 'c-101',
        name: 'أحمد محمود',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/1.png',
        price: "$40",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '18',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/3.png',
        price: "$30",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id: '19',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/2.png',
        price: "$45",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      },
      {
        id:'20',
        code: 'c-101',
        name: 'محمد الغريب',
        description: 'سينمت مصر,مول العرب,برج الأطنان,سراياالقبة',
        image: '../../assets/4.png',
        price: "$54",
        number: 1,
        Numberofpurchases: 'مرة واحدة',
        ticket: " تذكرة رقم pdf.45 "
      }
    ]

}
