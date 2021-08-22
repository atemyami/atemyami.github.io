long write(int, const void *, unsigned int);

int puts(const char *buff)
{
    write(1, "puts\n", 5);
    return 1;
}
int printf(const char *buff, ...)
{
    write(1, "printf\n", 7);
    return 1;
}
int main()
{
    printf("hi\n");
}