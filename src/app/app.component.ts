import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import {  MessageService, PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'primengi18n';

  customers: Customer[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(
    public primengConfig:PrimeNGConfig,
    private customerService: CustomerService) {}

  ngOnInit() {
    // 汉化 PrimeNG 控件的显示
    this.primengConfig.setTranslation({
      startsWith:'以...开始',contains:'包含','notContains':'不包含',endsWith:'以...结束',equals:'等于',notEquals:'不等于',
      lt:'小于',lte:'小于等于',gt:'大于',gte:'大于等于',is:'是',isNot:'不是',before:'以前',after:'之后',clear:'清除',apply:'应用',
      matchAll:'全部匹配',matchAny:'匹配任何',addRule:'添加规则',removeRule:'移除规则',accept:'确认',reject:'取消',
      choose:'选择',upload:'上传',cancel:'取消',
      dayNames:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
      dayNamesShort:['周日','周一','周二','周三','周四','周五','周六'],
      dayNamesMin:['日','一','二','三','四','五','六'],
      monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      monthNamesShort:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      today:'今天',weekHeader:'周',
    })


    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        customer => (customer.date = new Date(customer.date))
      );
    });

    this.representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" }
    ];

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" }
    ];


  }
}
